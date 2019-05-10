import { Component } from '@angular/core';
import {
  AlertController,
  Events,
  IonicPage,
  LoadingController,
  ModalController,
  NavController,
  NavParams
} from 'ionic-angular';
import {AddFilterPage} from "../add-filter/add-filter";
import {TransferFilterProvider} from "../../providers/transfer-filter/transfer-filter";
import {TransferDetailsPage} from "../transfer-details/transfer-details";

@IonicPage()
@Component({
  selector: 'page-transfers',
  templateUrl: 'transfers.html',
})
export class TransfersPage {

  transfers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController,
              public transferFilterProvider: TransferFilterProvider,
              public events:Events,
              public loadingCtrl: LoadingController,
              public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltersPage');
  }

  goToAddNewFilterPage() {
    const modal = this.modalCtrl.create(AddFilterPage);
    modal.present();
  }

  retrieveAllTransfers() {
    this.transferFilterProvider.getAll().subscribe(
      (res) => {
        console.log("R=> ", res);
        this.transfers = res;
      },
      (err) => console.error(err)
    )
  }

  goToDetails(id, table) {
    const modal = this.modalCtrl.create(TransferDetailsPage, {'id': id, 'table': table});
    modal.present();
  }
}
