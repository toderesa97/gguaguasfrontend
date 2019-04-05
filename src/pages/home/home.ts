import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VehiclesPage} from "../vehicles/vehicles";
import {ServicesPage} from "../services/services";
import {ClientesPage} from "../clientes/clientes";

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

  goToMinibusPage(){
    this.navCtrl.push(ServicesPage, {'vehicle':'services'});
  }

  goToVTCPage() {
    this.navCtrl.push(ServicesPage, {'vehicle':'vtc'});
  }

  goToMercedesPage() {
    this.navCtrl.push(ServicesPage, {'vehicle':'mercedes'});
  }

  goClientesPage() {
    this.navCtrl.push(ClientesPage);
  }
}
