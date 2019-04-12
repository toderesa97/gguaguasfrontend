import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AddAppUserProvider} from "../../providers/add-app-user/add-app-user";

/**
 * Generated class for the AddAppUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-app-user',
  templateUrl: 'add-app-user.html',
})
export class AddAppUserPage {
  accountType: string = "manager";
  newAppUsername: string;
  private response: any;
  private userPassword: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewController : ViewController,
              public addUserAppProvider : AddAppUserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAppUserPage');
  }


  closeModal() {
    this.viewController.dismiss();
  }

  insertAppUser() {
    this.addUserAppProvider.add(this.newAppUsername, this.accountType, this.userPassword).then((promise) =>
      promise.subscribe(
        (res) => {
          this.response = res;
          if (res.message == "OK.") {
            this.closeModal();
          }
        }
      ));
  }
}
