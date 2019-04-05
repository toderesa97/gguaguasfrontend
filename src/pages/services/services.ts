import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {AddServicePage} from "../add-service/add-service";
import {AddServiceProvider} from "../../providers/add-service/add-service-provider";
import {ServicesDetailPage} from "../services-detail/services-detail";

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  public services;
  vehicle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl:ModalController,
              public addServiceProvider: AddServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
    this.vehicle = this.navParams.get('vehicle');
    this.getServices();
  }

  addNewService() {
    const modal = this.modalCtrl.create(AddServicePage,{"vehicle": this.vehicle});
    modal.present();
    modal.onDidDismiss((order =>{
      this.getServices();
    }));
  }

  getServices(){
    this.addServiceProvider.getAll(this.vehicle).subscribe(
      (res) => {
        this.services = res;
        console.log(res);
      },
      (error)=>console.log(error)
    );
  }

  detailsService(id){
    const modal = this.modalCtrl.create(ServicesDetailPage, {"id": id, "vehicle": this.vehicle});
    modal.present();
  }

  removeService(id) {
    this.addServiceProvider.deleteById(id, this.vehicle).subscribe(
      (res) => {
        console.log("Borrado existosamente");
        this.getServices();
      },
      (error) => console.log("Error")
    );
  }
}
