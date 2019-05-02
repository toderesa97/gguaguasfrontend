import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddTransfersPartsProvider} from "../../providers/add-transfers-parts/add-transfers-parts";

@IonicPage()
@Component({
  selector: 'page-parts',
  templateUrl: 'parts.html',
})
export class PartsPage {

  transferDate: string;
  transfers = [];
  tomorrow: Date = new Date();


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public addTransfersPartsProvider: AddTransfersPartsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartsPage');
  }

  ngOnInit() {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.transferDate = this.tomorrow.toISOString();
    this.selectTransferByDate();
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
