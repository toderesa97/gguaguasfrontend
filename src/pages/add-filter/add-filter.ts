import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AddTransfersFiltersProvider} from "../../providers/add-transfers-filters/add-transfers-filters";
import {DataProvider} from "../../providers/add-transfers-filters/data";
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

  type: string;
  typeDate: string;

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewController: ViewController,
              public filterProvider: AddTransfersFiltersProvider,
              public dataService: DataProvider) {
    this.searchControl = new FormControl();
  }

  closeModal() {
    this.viewController.dismiss();
  }

  addNewFilter() {
    console.log(this.type, this.typeDate);

    this.filterProvider.add(this.type, this.typeDate).subscribe(
      (res: any) => {
        console.log(res);
      }, error => console.log(error)
    );
    this.closeModal();
  }

  driver: boolean = false;
  date: boolean = false;
  hotel: boolean = false;
  vehicle: boolean = false;
  unique: boolean = false;
  range: boolean = false;
  range2: boolean = false;

  onChange(type){
    if (type == 'conductor') {
      this.driver = true;
      this.date = false;
      this.hotel = false;
      this.vehicle = false;
      this.unique = false;
      this.range = false;
      this.range2 = false;
    } else if (type == 'fecha'){
      this.driver = false;
      this.date = true;
      this.hotel = false;
      this.vehicle = false;
      this.unique = false;
      this.range = false;
      this.range2 = false;
    } else if (type == 'hotel'){
      this.driver = false;
      this.date = false;
      this.hotel = true;
      this.vehicle = false;
      this.unique = false;
      this.range = false;
      this.range2 = false;
    } else if (type == 'vehiculo'){
      this.driver = false;
      this.date = false;
      this.hotel = false;
      this.vehicle = true;
      this.unique = false;
      this.range = false;
      this.range2 = false;
    }

  }

  onChangeDate(type){
    if (type == 'unica') {
      this.unique = true;
      this.range = false;
      this.range2 = false;
    } else if (type == 'rango'){
      this.unique = false;
      this.range = true;
      this.range2 = true;
    }

  }

  onChangeVehicle(type){
    if (type == 'conductor') {
      this.driver = true;
      this.date = false;
      this.hotel = false;
      this.vehicle = false;
      this.unique = false;
      this.range = false;
      this.range2 = false;
    } else if (type == 'fecha'){
      this.driver = false;
      this.date = true;
      this.hotel = false;
      this.vehicle = false;
      this.unique = false;
      this.range = false;
      this.range2 = false;
    }

  }


  ionViewDidLoad() {
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search  => {
      this.searching = false;
      this.setFilteredItems();
    });
  }
  onSearchInput(){
    this.searching = true;
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }


  /*
    getClients() {
      this.hotelProvider.getAllClients().subscribe(
        (res: any) => {
          console.log(res);
          this.clientsOfHotel = res;
        },
        (error) => console.log(error)
      );
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad AddHotelPage');
      this.getClients();
    }*/
}
