import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AddTransfersPartsProvider} from "../../providers/add-transfers-parts/add-transfers-parts";

/**
 * Generated class for the AddTransfersPartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-transfers-parts',
  templateUrl: 'add-transfers-parts.html',
})
export class AddTransfersPartsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewController: ViewController,
              public addTansfersPartsProvider: AddTransfersPartsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTransfersPartsPage');
  }

  closeModal(){
    this.viewController.dismiss();
  }

}
