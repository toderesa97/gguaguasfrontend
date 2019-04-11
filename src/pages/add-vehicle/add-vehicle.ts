import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, Events} from 'ionic-angular';
import {VehicleProvider} from "../../providers/vehicle/vehicle";
import {observable} from "rxjs/symbol/observable";

@IonicPage()
@Component({
  selector: 'page-add-vehicle',
  templateUrl: 'add-vehicle.html',
})
export class AddVehiclePage {
  licensePlate: string = "";
  vechicleSeats: string;
  vechicleBrand: string;
  response: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewController:ViewController,
              public vehicleProvider:VehicleProvider,
              public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddVehiclePage');
  }

  closeModal() {
    this.viewController.dismiss();
  }

  typingLicensePlate() {
    this.licensePlate = this.licensePlate.toUpperCase();
    console.log(this.licensePlate);
    if (this.licensePlate.match(/[0-9]{4}/i) && !this.licensePlate.includes("-")) {
      this.licensePlate = this.licensePlate.concat("-");
    }
  }

  insertVehicle() {
    console.log(this.licensePlate, this.vechicleBrand, this.vechicleSeats);
    this.vehicleProvider.add(this.licensePlate, this.vechicleBrand, this.vechicleSeats).then(
      observable => observable.subscribe(
        (res) => {
          this.response = res;
          if (res.message == "OK.") {
            this.closeModal();
            this.events.publish("insertedVehicleResponse");
          }
        },
        (err) => console.log(err)
      )
    ).catch(
      (err) => console.log(err)
    );

  }
}
