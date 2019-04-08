import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {AddMinibusServicePage} from "../add-minibus-service/add-minibus-service";
import {AddMinibusServiceProvider} from "../../providers/add-minibus-service/add-minibus-service-provider";
import {MinibusDetailPage} from "../minibus-detail/minibus-detail";
import {AddTransfersPartsPage} from "../add-transfers-parts/add-transfers-parts";

/**
 * Generated class for the MinibusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minibus',
  templateUrl: 'minibus.html',
})
export class MinibusPage {

  public services;
  vehicle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl:ModalController,
              public addMinibusServiceProvider: AddMinibusServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinibusPage');
    this.vehicle = this.navParams.get('vehicle');
    this.getMinibusServices();
  }

  addNewMinibusService() {
    const modal = this.modalCtrl.create(AddMinibusServicePage,{"vehicle": this.vehicle});
    modal.present();
    modal.onDidDismiss((order =>{
      this.getMinibusServices();
    }));
  }

  getMinibusServices(){
    this.addMinibusServiceProvider.getAll(this.vehicle).subscribe(
      (res) => {
        this.services = res;
        console.log(res);
      },
      (error)=>console.log(error)
    );
  }

  detailsMinibusService(id){
    const modal = this.modalCtrl.create(MinibusDetailPage, {"id": id, "vehicle": this.vehicle});
    modal.present();
  }

  removeService(id) {
    this.addMinibusServiceProvider.deleteById(id, this.vehicle).subscribe(
      (res) => {
        console.log("Borrado existosamente");
        this.getMinibusServices();
      },
      (error) => console.log("Error")
    );
  }
}
