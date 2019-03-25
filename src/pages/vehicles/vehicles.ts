import { Component } from '@angular/core';
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  Events,
  LoadingController,
  AlertController
} from 'ionic-angular';
import {AddVehiclePage} from "../add-vehicle/add-vehicle";
/**
 * Generated class for the VehiclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {
  loading : any;
  vehicles = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController,
              public vehicleProvider:VehicleProvider,
              public events:Events,
              public loadingCtrl: LoadingController,
              public alertCtrl:AlertController) {
    this.presentLoadingCustom();
    this.events.subscribe('insertedVehicleResponse', handler => {
      console.log("Entrying...");
      this.putVehicles();
    });
  }

  presentLoadingCustom() {
    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `Please wait...`,
    });

    setTimeout(() => {
      if (this.loading.instance) {
        this.loading.dismiss().then(this.showAlert());
      }
    }, 10000);

    this.loading.present();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Ops',
      subTitle: 'Parece que en este momento no está disponible la información\nVuelva a intentarlo en unos minutos.',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclesPage');
    this.putVehicles();
  }

  putVehicles() {
    this.vehicleProvider.getAllVehicles().subscribe(
      (res : any) => {
        this.vehicles = res;
        this.loading.dismiss();
      },
      err => console.log(err)
    );
  }

  addNewVehicle() {
    const addPageModal = this.modalCtrl.create(AddVehiclePage);
    addPageModal.present();
  }

  editVehicle(lisencePlate: any) {
    console.log("Edit vehicle with " , lisencePlate);
    const editPageModal = this.modalCtrl.create(EditVehiclePage);
    editPageModal.present().then(() => {
      this.events.publish("fromVehiclesToEditPage", lisencePlate);
    });
  }

  removeVehicle(lisencePlate: any) {
    this.vehicleProvider.delete(lisencePlate).subscribe(
      res => this.putVehicles(),
      err => console.log(err)
    );
  }
}

import {VehicleProvider} from "../../providers/vehicle/vehicle";
import {EditVehiclePage} from "../edit-vehicle/edit-vehicle";
