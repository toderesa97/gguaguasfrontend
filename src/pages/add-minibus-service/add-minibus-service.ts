import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AddMinibusServiceProvider} from "../../providers/add-minibus-service/add-minibus-service-provider";

/**
 * Generated class for the AddMinibusServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-minibus-service',
  templateUrl: 'add-minibus-service.html',
})
export class AddMinibusServicePage {

  name: string;
  destiny: string;
  origin: string;
  seats: string;
  company: string;
  directionCompany: string;
  transferDate: string;
  transferTime: string;
  description: string;
  vehicle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewController: ViewController,
              public addMinibusServiceProvider: AddMinibusServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMinibusServicePage');
    this.vehicle = this.navParams.get('vehicle');
  }

  closeModal() {
    this.viewController.dismiss();
  }

  addNewMinibusService() {
    console.log(this.name, this.destiny, this.origin, this.seats,
                this.company, this.directionCompany, this.transferDate,
                this.transferTime, this.description, this.vehicle);

    this.addMinibusServiceProvider.add(this.name, this.destiny, this.origin, this.seats,
                                        this.company, this.directionCompany, this.transferDate,
                                        this.transferTime, this.description, this.vehicle).subscribe(
                                          (res: any) => {
                                            console.log(res);
                                            this.closeModal();
                                          }, error => console.log(error)
                                        );
  }



}
