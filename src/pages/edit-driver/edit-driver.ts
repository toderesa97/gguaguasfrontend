import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {DriverProvider} from "../../providers/driver/driver";

/**
 * Generated class for the EditDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-driver',
  templateUrl: 'edit-driver.html',
})
export class EditDriverPage {

  name: string;
  surname: string;
  socialSecurityNumber: string;
  email: string;
  response : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: Events,
              public viewController: ViewController,
              public driverProvider : DriverProvider) {
    this.events.subscribe("fromDriversToEditPage", (data) => {
      this.name = data;
      //this.fillForm();
    });
  }

  /*fillForm() {
    this.driverProvider.get(this.name).subscribe(
      (res : any) => {
        console.log(res);
        this.name = res.name;
        this.surname = res.surname;
        this.socialSecurityNumber = res.socialSecurityNumber;
        this.email = res.email;
      },
      err => console.log(err)
    );*/
 // }
/*
  ionViewDidLoad() {

    console.log('ionViewDidLoad EditDriverPage');
  }

  editDriver() {

  }

  closeModal() {
    this.viewController.dismiss();
  }*/

}
