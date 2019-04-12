import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {HotelProvider} from "../../providers/hotel/hotel";

/**
 * Generated class for the AddHotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-hotel',
  templateUrl: 'add-hotel.html',
})
export class AddHotelPage {

  hotelCif: string;
  cif: string;
  hotelName: string;
  hotelEmail: string;
  nickname: string;

  clientName: string;

  clientsOfHotel = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewController: ViewController,
              public hotelProvider: HotelProvider) {
  }

  closeModal() {
    this.viewController.dismiss();
  }

  addNewHotel() {
    console.log(this.hotelCif, this.cif, this.hotelName, this.hotelEmail, this.nickname);

    this.hotelProvider.add(this.hotelCif, this.cif, this.hotelName, this.hotelEmail, this.nickname).subscribe(
      (res: any) => {
        console.log(res);
      }, error => console.log(error)
    );
    this.closeModal();
  }

  getClients() {
    this.hotelProvider.getAllClients().subscribe(
      (res: any) => {
        console.log(res);
        this.clientsOfHotel = res;
      },
      (error) => console.log(error)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHotelPage');
    this.getClients();
  }
}
