import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {DriverProvider} from "../../providers/driver/driver";

/**
 * Generated class for the AddClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-driver',
  templateUrl: 'add-driver.html',
})
export class AddDriverPage {

  name: string;
  surname: string;
  socialSecurityNumber: string;
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewController: ViewController,
              public driverProvider: DriverProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDriverPage');
  }

  addNewDriver() {
    console.log(this.name, this.surname, this.socialSecurityNumber, this.email);

    this.driverProvider.add(this.name, this.surname, this.socialSecurityNumber, this.email).subscribe(
      (res: any) => {
        console.log(res);
      }, error => console.log(error)
    );
    this.closeModal();
  }

  closeModal() {
    this.viewController.dismiss();
  }
}
