import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
import {TransferFilterProvider} from "../../providers/transfer-filter/transfer-filter";
import { IonicSelectableComponent } from 'ionic-selectable';

@IonicPage()
@Component({
  selector: 'page-add-filter',
  templateUrl: 'add-filter.html',
})


export class AddFilterPage implements OnInit {
  filterType: string;
  dateType: string;
  transferFromDate: string;
  transferToDate: string;

  drivers: string[];
  driversName: string[] = [];
  private filteredDriversNames: string[];

  hotels: string[];
  hotelsNickname: string[] = [];
  private filteredHotelsNicknames: string[];

  vehicles: string[];
  vehiclesBrands: string[] = [];
  private filteredVehiclesBrands: string[];



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewController: ViewController,
              public transferFilterProvider: TransferFilterProvider) {
    //this.initializeItems();
    this.initializeNicknames();
    this.initializeVehiclesBrand();

  }

  closeModal() {
    this.viewController.dismiss();
  }

  ionViewDidLoad() {

  }
  // DRIVERS

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

  // NICKNAMES

  getNicknamesHotels(ev) {
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.filteredHotelsNicknames = this.hotelsNickname.filter((itemNickname) => {
        return (itemNickname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  initializeNicknames() {
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
  }

  initializeVehiclesBrand(){
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

  getBrandVehicles(ev) {
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.filteredVehiclesBrands = this.vehiclesBrands.filter((vehicleBrand) => {
        return (vehicleBrand.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('driver:', event.value);
  }

}
