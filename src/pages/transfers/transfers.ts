import { Component } from '@angular/core';
import {
  AlertController,
  Events,
  IonicPage,
  LoadingController,
  ModalController,
  NavController,
  NavParams
} from 'ionic-angular';
import {AddTransfersFiltersProvider} from "../../providers/add-transfers-filters/add-transfers-filters";
import {AddFilterPage} from "../add-filter/add-filter";

@IonicPage()
@Component({
  selector: 'page-transfers',
  templateUrl: 'transfers.html',
})
export class TransfersPage {

  loading : any;
  transferDate: string;
  transfers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController,
              public addTransfersFiltersProvider: AddTransfersFiltersProvider,
              public events:Events,
              public loadingCtrl: LoadingController,
              public alertCtrl:AlertController) {
    this.presentLoadingCustom();
    this.events.subscribe('insertedHotelResponse', handler => {
      console.log("Entrying...");
      this.getHotels();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltersPage');
    this.getHotels();
  }

  selectTransferByDate() {
    console.log(this.transferDate);

    this.addTransfersFiltersProvider.getByDate(this.transferDate).subscribe(
      (res: any) => {
        console.log(res);
        this.transfers = res;
      }, error => console.log(error)
    );
  }

  addNewFilter() {
    const modal = this.modalCtrl.create(AddFilterPage);
    modal.present();
    modal.onDidDismiss((order =>{
      this.getHotels();
    }));
  }

  getHotels(){
    this.addTransfersFiltersProvider.getAll().subscribe(
      (res : any) => {
        this.transfers = res;
      },
      (error)=>console.log(error)
    );
    this.loading.dismiss();

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
*/

  removeHotel(hotelCif) {
    this.addTransfersFiltersProvider.remove(hotelCif).subscribe(
      res => this.getHotels(),
      err => console.log(err)
    );
  }

}
