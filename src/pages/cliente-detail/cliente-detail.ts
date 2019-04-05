import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ClienteProvider} from "../../providers/cliente/cliente";

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
    console.log('ionViewDidLoad ServicesDetailPage');
    this.getDetails();
  }

  getDetails(){

    this.clienteProvider.getById(this.id).subscribe(
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
