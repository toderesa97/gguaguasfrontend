import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {HotelProvider} from "../../providers/hotel/hotel";
import {AddHotelPage} from "../add-hotel/add-hotel";
import {
  Events,
  LoadingController,
  AlertController
} from 'ionic-angular';

/**
 * Generated class for the HotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html',
})
export class HotelsPage {

  loading : any;
  hotels = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController,
              public hotelProvider: HotelProvider,
              public events:Events,
              public loadingCtrl: LoadingController,
              public alertCtrl:AlertController) {
    this.presentLoadingCustom();
    this.events.subscribe('insertedHotelResponse', handler => {
      console.log("Entrying...");
      this.putHotels();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelsPage');
    this.getHotels();
  }

  addNewHotel() {
    const modal = this.modalCtrl.create(AddHotelPage);
    modal.present();
    modal.onDidDismiss((order =>{
      this.getHotels();
    }));
  }
  getHotels(){
    this.hotelProvider.getAll().subscribe(
      (res : any) => {
        this.hotels = res;
        this.loading.dismiss();
      },
      (error)=>console.log(error)
    );
  }

  /*detailsHotel(id){
    console.log("CLICKED hotel with id ", id);
    const modal = this.modalCtrl.create(HotelDetailPage, {"id": id});
    modal.present();
  }*/











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



  putHotels() {
    this.hotelProvider.getAll().subscribe(
      (res : any) => {
        this.hotels = res;
        this.loading.dismiss();
      },
      err => console.log(err)
    );
  }



  /*editVehicle(lisencePlate: any) {
    console.log("Edit vehicle with " , lisencePlate);
    const editPageModal = this.modalCtrl.create(EditVehiclePage);
    editPageModal.present().then(() => {
      this.events.publish("fromVehiclesToEditPage", lisencePlate);
    });
  }
*/

  removeHotel(hotelCif: any) {
    this.hotelProvider.remove(hotelCif).subscribe(
      res => this.putHotels(),
      err => console.log(err)
    );
  }
}

//import {VehicleProvider} from "../../providers/vehicle/vehicle";
//import {EditVehiclePage} from "../edit-vehicle/edit-vehicle";








