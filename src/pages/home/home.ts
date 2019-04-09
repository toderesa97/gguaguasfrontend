import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VehiclesPage} from "../vehicles/vehicles";
import {ServicesPage} from "../services/services";
import {ClientesPage} from "../clientes/clientes";
import {ServicesButtonsPage} from "../services-buttons/services-buttons";

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

  goClientesPage() {
    this.navCtrl.push(ClientesPage);
  }

  goToServicesButtonsPage() {
    this.navCtrl.push(ServicesButtonsPage);
  }
}
