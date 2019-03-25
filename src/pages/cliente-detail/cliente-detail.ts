import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ClienteProvider} from "../../providers/cliente/cliente";

/**
 * Generated class for the ClienteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-detail',
  templateUrl: 'cliente-detail.html',
})
export class ClienteDetailPage {

  private id: number;
  public details: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public clienteProvider: ClienteProvider,
              public viewController: ViewController) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinibusDetailPage');
    this.getDetails();
  }

  getDetails(){
    this.clienteProvider.getById(this.id).subscribe(
      (res) => {
        this.details = res[0];
        console.log(res);
      },
      (error)=> console.log(error)
    );
  }

  closeModal() {
    this.viewController.dismiss();
  }
}
