import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServicesPage} from "../services/services";

/**
 * Generated class for the ServicesButtonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services-buttons',
  templateUrl: 'services-buttons.html',
})
export class ServicesButtonsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesButtonsPage');
  }


  goToMinibusPage(){
    this.navCtrl.push(ServicesPage, {'vehicle':'minibus'});
  }

  goToVTCPage() {
    this.navCtrl.push(ServicesPage, {'vehicle':'vtc'});
  }

  goToMercedesPage() {
    this.navCtrl.push(ServicesPage, {'vehicle':'mercedes'});
  }

}
