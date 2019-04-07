import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {VehiclesPage} from "../vehicles/vehicles";
import {MinibusPage} from "../minibus/minibus";
import {ClientesPage} from "../clientes/clientes";
import {Storage} from "@ionic/storage";
import {LoginProvider} from "../../providers/login/login";
import {LoginPage} from "../login/login";
import {AddAppUserPage} from "../add-app-user/add-app-user";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  private userRole: string;

  constructor(public navCtrl: NavController,
              public storage:Storage,
              public modalCtrl : ModalController,
              public loginProvider : LoginProvider) {
    storage.get("session").then((data) => {
      this.username = data.username;
      this.userRole = data.role;
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

  isRootUser() {
    return this.userRole == "root";
  }

  goToAddAppUserPage() {
    const addAppUserPageModal = this.modalCtrl.create(AddAppUserPage);
    addAppUserPageModal .present();
  }
}
