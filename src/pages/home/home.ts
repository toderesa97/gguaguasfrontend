import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {VehiclesPage} from "../vehicles/vehicles";
import {ClientesPage} from "../clientes/clientes";
import {PartsPage} from "../parts/parts";
import {TransfersPage} from "../transfers/transfers";
import {DriversPage} from "../drivers/drivers";
import {HotelsPage} from "../hotels/hotels";
import {ServicesButtonsPage} from "../services-buttons/services-buttons";
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

  goClientesPage() {
    this.navCtrl.push(ClientesPage);
  }

  goToServicesButtonsPage() {
    this.navCtrl.push(ServicesButtonsPage);
  }


  goDriversPage() {
    this.navCtrl.push(DriversPage);
  }

  goHotelsPage() {
    this.navCtrl.push(HotelsPage);
  }

  goToPartsPage() {
    this.navCtrl.push(PartsPage);
  }

  goToTransfersPage() {
    this.navCtrl.push(TransfersPage);
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
