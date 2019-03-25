import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {VehicleProvider} from "../../providers/vehicle/vehicle";

/**
 * Generated class for the EditVehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-vehicle',
  templateUrl: 'edit-vehicle.html',
})
export class EditVehiclePage {

  licensePlate : string;
  vechicleSeats: string;
  vechicleBrand: string;

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
    this.vehicleProvider.get(this.licensePlate).subscribe(
      (res : any) => {
        console.log(res);
        this.vechicleBrand = res.brand;
        this.vechicleSeats = res.seats;
      },
      err => console.log(err)
    );
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad EditVehiclePage');
  }

  editVehicle() {
    
  }

  closeModal() {
    this.viewController.dismiss();
  }

}
