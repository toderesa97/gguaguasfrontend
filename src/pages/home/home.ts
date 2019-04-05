import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VehiclesPage} from "../vehicles/vehicles";
import {MinibusPage} from "../minibus/minibus";
import {ClientesPage} from "../clientes/clientes";
import {Storage} from "@ionic/storage";
import {LoginProvider} from "../../providers/login/login";
import {LoginPage} from "../login/login";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;

  constructor(public navCtrl: NavController,
              public storage:Storage,
              public loginProvider : LoginProvider) {
    storage.get("session").then((data) => {
      this.username = data.username;
    })
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

  logout() {
    this.loginProvider.logout().then((promise) =>
      promise.subscribe(
        (res) => this.navCtrl.setRoot(LoginPage)
      )
    )
  }
}
