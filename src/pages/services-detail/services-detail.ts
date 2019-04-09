import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AddServiceProvider} from "../../providers/add-service/add-service-provider";

/**
 * Generated class for the ServicesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services-detail',
  templateUrl: 'services-detail.html',
})
export class ServicesDetailPage {

  private id: number;
  public details: any;
  vehicle: string;
  time: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public addServiceProvider: AddServiceProvider,
              public viewController: ViewController) {
    this.vehicle = this.navParams.get('vehicle');
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesDetailPage');
    this.getDetails();
  }

  getDetails(){
    this.addServiceProvider.getById(this.id, this.vehicle).subscribe(
      (res) => {
        this.details = res[0];
        this.time = this.details.transferTime;
        console.log(res);
      },
      (error)=> console.log(error)
    );
  }

  closeModal() {
    this.viewController.dismiss();
  }
}
