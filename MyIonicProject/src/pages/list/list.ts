import {Component, OnInit} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

import {ItemDetailsPage} from '../item-details/item-details';
import {ConfigProvider} from "../../providers/config/config";
import {HotelModel} from "../../app/app.component";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  icons: string[];
  items: Array<HotelModel>;
  public baseUrl = 'http://api.meetingplannerguide.com/';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private configProvider: ConfigProvider) {
    this.items = [];
  }

  ngOnInit() {
    this.configProvider.postConfig('profiles/profilefilter', {
      NumberOfHotelRooms: 0,
      NumberOfParticipants: null,
      ProfileType: "hotels",
      SizeOfLargestMeetingRoom: [0, 1000],
      SpecialFilter: "",
      ToAirport: [0, 51],
      ToCityCenter: [0, 51]
    }).subscribe((res: HotelModel[]) => {
      this.items = res;

      this.items.map((hotel: HotelModel) => {
        hotel.DescriptionShort = hotel.Description.substring(0, 200) + '...';
        hotel.NameShort = hotel.Name[0];
        let images = hotel.Images.map(image => {
          if (image.indexOf('_cropped_370_240') <= 0) {
            image = image.slice(0, image.lastIndexOf('.')) +
              "_cropped_370_240" + image.slice(image.lastIndexOf('.'));
          }
          return image;
        });
        hotel.Images = images;
      })
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
