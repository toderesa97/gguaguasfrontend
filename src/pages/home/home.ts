import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VehiclesPage} from "../vehicles/vehicles";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToVehiclesPage() {
    this.navCtrl.push(VehiclesPage);
  }

}
