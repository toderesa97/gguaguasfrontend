import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {AddMinibusServicePage} from "../add-service/add-service";
import {AddServiceProvider} from "../../providers/add-service/add-service-provider";
import {MinibusDetailPage} from "../services-detail/services-detail";

/**
 * Generated class for the MinibusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minibus',
  templateUrl: 'services.html',
})
export class MinibusPage {

  public services;
  vehicle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl:ModalController,
              public addMinibusServiceProvider: AddServiceProvider) {
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
