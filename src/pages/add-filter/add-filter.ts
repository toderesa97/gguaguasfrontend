import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
import {TransferFilterProvider} from "../../providers/transfer-filter/transfer-filter";
import { IonicSelectableComponent } from 'ionic-selectable';
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-filter',
  templateUrl: 'add-filter.html',
})
@Component({
  templateUrl: 'transfer.html',
})

export class AddFilterPage implements OnInit {
  filterType: string;
  dateType: string;
  transferFromDate: string;
  transferToDate: string;

  drivers: string[];
  driversName: string[] = [];

  hotels: string[];
  hotelsNickname: string[] = [];

  vehicles: string[];
  vehiclesBrands: string[] = [];

  transfers: string[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewController: ViewController,
              public transferFilterProvider: TransferFilterProvider,
              public events: Events) {
  }

  closeModal() {
    this.viewController.dismiss();
  }

  ionViewDidLoad() {

  }

  ngOnInit() {

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

    this.transferFilterProvider.getAllHotels().subscribe(
      (res: any) => {
        this.hotels = res;
        let this_=this;
        this.hotels.forEach(function (hotel: any) {
          this_.hotelsNickname.push(hotel.nickname);
        })
      },
      (error) => console.log(error)
    );

    this.transferFilterProvider.getAllVehicles().subscribe(
      (res: any) => {
        console.log(res);
        this.vehicles = res;
        let this_=this;
        this.vehicles.forEach(function (vehicle: any) {
          this_.vehiclesBrands.push(vehicle.brand);
        })
      }
    )

  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('driver:', event.value);
  }

  getDriverValue(value) {
    this.closeModal();
    this.events.publish('driver', value);
  }

  getHotelValue(value) {
    this.closeModal();
    this.events.publish('hotel', value);
  }

  getVehicleValue(value) {
    this.closeModal();
    this.events.publish('vehicle', value);
  }

}
