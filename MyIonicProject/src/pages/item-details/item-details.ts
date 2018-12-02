import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {HotelModel} from "../../app/app.component";


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
  selectedItem: HotelModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}
