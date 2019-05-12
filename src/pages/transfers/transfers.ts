import { Component } from '@angular/core';
import {
  Events,
  IonicPage,
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
              public events:Events) {
    events.subscribe('driver', (driver) => {
      this.getDriverValue(driver);
    });

    events.subscribe('hotel', (hotel) => {
     this.getHotelValue(hotel);
    });

    events.subscribe('vehicle', (vehicle) => {
        this.getVehicleValue(vehicle);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltersPage');
  }

  goToAddNewFilterPage() {
    const modal = this.modalCtrl.create(AddFilterPage);
    modal.present();
  }

  retrieveAllTransfers() {
    this.transferFilterProvider.getAll().then(
      subscription => subscription.subscribe(
        (res) => {
          console.log("R=> ", res);
          this.transfers = res;
        },
        (err) => console.error(err)
      )
    )
  }

  goToDetails(id, table) {
    const modal = this.modalCtrl.create(TransferDetailsPage, {'id': id, 'table': table});
    modal.present();
  }

  getDriverValue(value) {
    this.transferFilterProvider.getDriver(value).then(
      subscription => subscription.subscribe(
        (res) => {
          console.log("R=> ", res);
          console.log(value);
          this.transfers = res;
        },
        (err) => console.error(err)
      )
    )
  }

  getHotelValue(value) {
    this.transferFilterProvider.getHotel(value).then(
      subscription => subscription.subscribe(
        (res) => {
          console.log("R=> ", res);
          console.log(value);
          this.transfers = res;
        },
        (err) => console.error(err)
      )
    )
  }

  getVehicleValue(value) {
    this.transferFilterProvider.getVehicle(value).then(
      subscription => subscription.subscribe(
        (res) => {
          console.log("R=> ", res);
          console.log(value);
          this.transfers = res;
        },
        (err) => console.error(err)
      )
    )
  }

}
