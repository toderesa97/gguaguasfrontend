import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ClienteProvider} from "../../providers/cliente/cliente";

@IonicPage()
@Component({
  selector: 'page-add-client',
  templateUrl: 'add-client.html',
})
export class AddClientPage {

  name: string;
  email: string;
  cif: string;
  razonSocial: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewController: ViewController,
              public clienteProvider: ClienteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClientPage');
  }

  addNewCliente() {
    console.log(this.name, this.email, this.cif, this.razonSocial);

    this.clienteProvider.add(this.name, this.email, this.cif, this.razonSocial).subscribe(
      (res: any) => {
        console.log(res);
        this.closeModal();
      }, error => console.log(error)
    );
  }
  closeModal() {
    this.viewController.dismiss();
  }
}
