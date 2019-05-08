import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
import {TransferFilterProvider} from "../../providers/transfer-filter/transfer-filter";
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


  drivers: string[];
  driversName: string[] = [];
  private filteredDriversNames: string[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewController: ViewController,
              public transferFilterProvider: TransferFilterProvider) {
    this.initializeItems();
  }

  closeModal() {
    this.viewController.dismiss();
  }


  ionViewDidLoad() {

  }

  getItems(ev) {
    var val = ev.target.value;


    if (val && val.trim() != '') {
      this.filteredDriversNames = this.driversName.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  initializeItems() {
    this.transferFilterProvider.getAllDrivers().subscribe(
      (res: any) => {
        this.drivers = res;
        let this_=this;
        this.drivers.forEach(function (driver: any) {
          this_.driversName.push(driver.name.concat(" ").concat(driver.surname));
        })
      },
      (error) => console.log(error)
    );
  }

}
