import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = ListPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hotel List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.nav.setRoot(ListPage);
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

export class HotelModel {
  Name: string;
  Description: string;
  Email: string;
  ID: number;
  Images: string[];
  Address: string;
  Logo: string;
  MainImage: string;
  NumberOfHotelRooms: number;
  NumberOfParticipant: number;
  SeatingInBanquet: number;
  SeatingInCabaret: number;
  SeatingInClassroom: number;
  SeatingInReception: number;
  SeatingInTheatre: number;
  SeatingInUShape: number;
  Telephone: string;
  ToAirport: number;
  ToCityCenter: number;
  Website: string;
  DescriptionShort: string;
  NameShort: string;
}

