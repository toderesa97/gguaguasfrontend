import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
/**
 * Generated class for the AddHotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-filter',
  templateUrl: 'add-filter.html',
})
export class AddFilterPage {
  filterType: string;
  dateType: string;
  transferFromDate: string;
  transferToDate: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewController: ViewController) {
  }

  closeModal() {
    this.viewController.dismiss();
  }


  ionViewDidLoad() {

  }

}
