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
  seats: number;
  company: string;
  directionCompany: string;
  transferDate: string;
  transferTime: string;
  description: string;

  response: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewController: ViewController,
              public addMinibusServiceProvider: AddMinibusServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMinibusServicePage');
  }

  closeModal() {
    this.viewController.dismiss();
  }

  addNewMinibusService() {
    console.log(this.name, this.destiny, this.origin, this.seats,
                this.company, this.directionCompany, this.transferDate,
                this.transferTime, this.description);

    this.addMinibusServiceProvider.add(this.name, this.destiny, this.origin, this.seats,
                                        this.company, this.directionCompany, this.transferDate,
                                        this.transferTime, this.description).subscribe(
                                          (res: any) => {
                                            this.response = res;
                                            console.log(res);
                                            this.closeModal();
                                          }, error => console.log(error)
                                        );
  }
}
