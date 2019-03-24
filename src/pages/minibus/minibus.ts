import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {AddMinibusServicePage} from "../add-minibus-service/add-minibus-service";

/**
 * Generated class for the MinibusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minibus',
  templateUrl: 'minibus.html',
})
export class MinibusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinibusPage');
  }

  addNewMinibusService() {
    const modal = this.modalCtrl.create(AddMinibusServicePage);
    modal.present();
  }

}
