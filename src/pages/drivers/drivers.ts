import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {DriverProvider} from "../../providers/driver/driver";
import {AddDriverPage} from "../add-driver/add-driver";
import {
  Events,
  LoadingController,
  AlertController
} from 'ionic-angular';

/**
 * Generated class for the DriversPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drivers',
  templateUrl: 'drivers.html',
})
export class DriversPage {

  loading : any;
  drivers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController,
              public driverProvider: DriverProvider,
              public events:Events,
              public loadingCtrl: LoadingController,
              public alertCtrl:AlertController) {
    this.presentLoadingCustom();
    this.events.subscribe('insertedDriverResponse', handler => {
      console.log("Entrying...");
      this.getDrivers();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriversPage');
    this.getDrivers();
  }

  addNewDriver() {
    const modal = this.modalCtrl.create(AddDriverPage);
    modal.present();
    modal.onDidDismiss((order =>{
      this.getDrivers();
    }));
  }

  getDrivers(){
    this.driverProvider.getAll().subscribe(
      (res : any) => {
        this.drivers = res;
        this.loading.dismiss();
      },
      (error)=>console.log(error)
    );

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

  /*editVehicle(lisencePlate: any) {
    console.log("Edit vehicle with " , lisencePlate);
    const editPageModal = this.modalCtrl.create(EditVehiclePage);
    editPageModal.present().then(() => {
      this.events.publish("fromVehiclesToEditPage", lisencePlate);
    });
  }

  }*/

  removeDriver(id) {
    this.driverProvider.remove(id).subscribe(
      res => this.getDrivers(),
      err => console.log(err)
    );
  }

}

//import {VehicleProvider} from "../../providers/vehicle/vehicle";
//import {EditVehiclePage} from "../edit-vehicle/edit-vehicle";








