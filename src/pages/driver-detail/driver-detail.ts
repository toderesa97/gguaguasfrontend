import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {DriverProvider} from "../../providers/driver/driver";

/**
 * Generated class for the DriverDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-detail',
  templateUrl: 'driver-detail.html',
})
export class DriverDetailPage {

  private id: number;
  public details: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public driverProvider: DriverProvider,
              public viewController: ViewController) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinibusDetailPage');
    //this.getDetails();
  }

  /*getDetails(){

    this.driverProvider.getById(this.id).subscribe(
      (res) => {
        console.log(res);
        this.details = res;
      },
      (error)=> console.log(error)
    );
  }*/

  closeModal() {
    this.viewController.dismiss();
  }
}
