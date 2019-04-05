import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginProvider} from "../../providers/login/login";
import {HomePage} from "../home/home";
import {Storage} from "@ionic/storage";

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
        console.log(res);
        if (res.message === "Verified.") {
          this.storage.set("session", {"token" : res.token, "username" : this.username}).then(()=>{
            this.navCtrl.setRoot(HomePage);
          });
        } else {
          this.showAlertIncorrectCredentials();
        }
      },
      (err) => this.showAlertIncorrectCredentials()
    )
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
