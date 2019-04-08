import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VehiclesPage} from "../vehicles/vehicles";
import {MinibusPage} from "../minibus/minibus";
import {ClientesPage} from "../clientes/clientes";
import {PartsPage} from "../parts/parts";

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
    this.navCtrl.push(MinibusPage, {'vehicle':'minibus'});
  }

  goToVTCPage() {
    this.navCtrl.push(MinibusPage, {'vehicle':'vtc'});
  }

  goToMercedesPage() {
    this.navCtrl.push(MinibusPage, {'vehicle':'mercedes'});
  }

  goClientesPage() {
    this.navCtrl.push(ClientesPage);
  }

  goToPartsPage() {
    this.navCtrl.push(PartsPage);
  }
}
