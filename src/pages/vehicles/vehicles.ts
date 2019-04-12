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
import * as _ from 'lodash';

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
      this.putVehicles();
    });
    this.events.subscribe("vehicleUpdated", (vehicleObj) => {
      this.vehicles.forEach(function(vehicle) {
        if (vehicleObj.licensePlate === vehicle.licensePlate) {
          vehicle.brand = vehicleObj.brand;
          vehicle.seats = vehicleObj.seats;
        }
      })
    })
  }

  presentLoadingCustom() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
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
    this.vehicleProvider.getAllVehicles().then(
      (observable) => {
        this.loading.dismiss();
        observable.subscribe(
        (vehicles) => this.vehicles = vehicles,
        (error) => console.error(error)
      )}
    ).catch(
      (err) => console.error(err)
    )
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
    this.vehicleProvider.delete(lisencePlate).then(
      (observable) => {
        observable.subscribe(
          (res) => {
            console.log(this.vehicles);
            this.vehicles = _.remove(this.vehicles, function (vehicle) {
              return vehicle.licensePlate !== lisencePlate;
            });
            console.log(res)
          },
          (err) => {
            console.error(err)
          }
        )
      }
    ).catch(
      (err) => console.error(err)
    )
  }
}

import {VehicleProvider} from "../../providers/vehicle/vehicle";
import {EditVehiclePage} from "../edit-vehicle/edit-vehicle";
