import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {AddMinibusServicePage} from "../add-minibus-service/add-minibus-service";
import {ClienteProvider} from "../../providers/cliente/cliente";
import {AddClientPage} from "../add-client/add-client";
import {MinibusDetailPage} from "../minibus-detail/minibus-detail";
import {ClienteDetailPage} from "../cliente-detail/cliente-detail";

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  public clientes;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController,
              public clienteProvider: ClienteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
    this.getClientes();
  }

  addNewCliente() {
    const modal = this.modalCtrl.create(AddClientPage);
    modal.present();
    modal.onDidDismiss((order =>{
      this.getClientes();
    }));
  }
  getClientes(){
    this.clienteProvider.getAll().subscribe(
      (res) => {
        this.clientes = res;
        console.log(res);
      },
      (error)=>console.log(error)
    );
  }

  detailsCliente(id){
    const modal = this.modalCtrl.create(ClienteDetailPage, {"id": id});
    modal.present();
  }
}
