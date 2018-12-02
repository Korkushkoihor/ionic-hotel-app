import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {ListPage} from "../list/list";

@Component({
  selector: 'hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(){
    this.navCtrl.push(ListPage);
  }
}
