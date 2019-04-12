import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {HotelProvider} from "../../providers/hotel/hotel";

/**
 * Generated class for the HotelDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotel-detail',
  templateUrl: 'hotel-detail.html',
})
export class HotelDetailPage {

  private id: number;
  public details: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public hotelProvider: HotelProvider,
              public viewController: ViewController) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelDetailPage');
    this.getDetails();
  }

  getDetails(){

    this.hotelProvider.getById(this.id).subscribe(
      (res) => {
        console.log(res);
        this.details = res;
      },
      (error)=> console.log(error)
    );
  }

  closeModal() {
    this.viewController.dismiss();
  }
}
