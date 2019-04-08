import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddTransfersPartsProvider} from "../../providers/add-transfers-parts/add-transfers-parts";

/**
 * Generated class for the PartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parts',
  templateUrl: 'parts.html',
})
export class PartsPage {

  transferDate: string;
  transfers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public addTransfersPartsProvider: AddTransfersPartsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartsPage');
  }

  selectTransferByDate() {
    console.log(this.transferDate);

    this.addTransfersPartsProvider.getByDate(this.transferDate).subscribe(
      (res: any) => {
        console.log(res);
        this.transfers = res;
      }, error => console.log(error)
    );
  }
}
