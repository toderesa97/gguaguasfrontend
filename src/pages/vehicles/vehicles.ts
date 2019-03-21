import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Events} from 'ionic-angular';
import {AddVehiclePage} from "../add-vehicle/add-vehicle";
/**
 * Generated class for the VehiclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {

  vehicles = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public vehicleProvider:VehicleProvider,
              public events:Events) {
    this.events.subscribe('insertedVehicleResponse', handler => {
      console.log("Entrying...");
      this.putVehicles();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclesPage');
    this.putVehicles();
  }

  putVehicles() {
    this.vehicleProvider.getAllVehicles().subscribe(
      (res : any) => {
        this.vehicles = res;
      },
      err => console.log(err)
    );
  }

  addNewVehicle() {
    const modal = this.modalCtrl.create(AddVehiclePage);
    modal.present();
  }

  editVehicle(lisencePlate: any) {
    console.log("Edit vehicle with " , lisencePlate);
  }

  removeVehicle(lisencePlate: any) {
    this.vehicleProvider.delete(lisencePlate).subscribe(
      res => this.putVehicles(),
      err => console.log(err)
    );
  }
}

import {VehicleProvider} from "../../providers/vehicle/vehicle";
