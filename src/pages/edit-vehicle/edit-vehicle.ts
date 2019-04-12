import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {VehicleProvider} from "../../providers/vehicle/vehicle";

@IonicPage()
@Component({
  selector: 'page-edit-vehicle',
  templateUrl: 'edit-vehicle.html',
})
export class EditVehiclePage {

  licensePlate : string;
  vehicleSeats: string;
  vehicleBrand: string;

  response : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: Events,
              public viewController: ViewController,
              public vehicleProvider : VehicleProvider) {
    this.events.subscribe("fromVehiclesToEditPage", (data) => {
      this.licensePlate = data;
      this.fillForm();
    });
  }

  fillForm() {
    this.vehicleProvider.get(this.licensePlate).then(
      observable => observable.subscribe(
        (res : any) => {
          console.log(res);
          this.vehicleBrand = res.brand;
          this.vehicleSeats = res.seats;
        },
        err => console.log(err)
      ),
      error => console.error(error)
    ).catch(
      (err) => console.error(err)
    )


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditVehiclePage');
  }

  editVehicle() {
    this.vehicleProvider.updateVehicle(this.licensePlate, this.vehicleSeats, this.vehicleBrand).then(
      observable => observable.subscribe(
        (res) => {
          if (res.message === "OK.") {
            this.events.publish("vehicleUpdated", {licensePlate : this.licensePlate,
              seats : this.vehicleSeats, brand : this.vehicleBrand});
            this.closeModal();
          } else {
            this.response = res;
          }
        }
      )
    )
  }

  closeModal() {
    this.viewController.dismiss();
  }

}
