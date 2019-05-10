import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginProvider} from "../../providers/login/login";
import {HomePage} from "../home/home";
import {Storage} from "@ionic/storage";
import {Session} from "../../providers/Session";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private username:string;
  private password:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loginProvider : LoginProvider,
              public storage:Storage) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.loginProvider.login(this.username, this.password).subscribe(
      (res) => {
        if (res.message === "Verified.") {
            Session.setUsername(this.username)
              .setToken(res.token)
              .setRole(res.role);
            this.navCtrl.setRoot(HomePage);

        } else {
          this.showAlertIncorrectCredentials();
        }
      },
      (err) => this.showAlertIncorrectCredentials()
    );
  }

  showAlertIncorrectCredentials() {
    const alert = this.alertCtrl.create({
      title: 'Ops',
      subTitle: 'Credenciales incorrectas.',
      buttons: ['Reintentar']
    });
    alert.present();
  }

}
