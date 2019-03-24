import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AddMinibusServiceProvider} from "../../providers/add-minibus-service/add-minibus-service-provider";

/**
 * Generated class for the MinibusDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minibus-detail',
  templateUrl: 'minibus-detail.html',
})
export class MinibusDetailPage {

  private id: number;
  public details: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public addMinibusServiceProvider: AddMinibusServiceProvider,
              public viewController: ViewController) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinibusDetailPage');
    this.getDetails();
  }

  getDetails(){
    this.addMinibusServiceProvider.getById(this.id).subscribe(
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
