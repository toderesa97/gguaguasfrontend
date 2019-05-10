import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddTransfersPartsProvider} from "../../providers/add-transfers-parts/add-transfers-parts";
import {DriverProvider} from "../../providers/driver/driver";
import {HotelProvider} from "../../providers/hotel/hotel";
import {VehicleProvider} from "../../providers/vehicle/vehicle";
import {ClienteProvider} from "../../providers/cliente/cliente";

@IonicPage()
@Component({
  selector: 'page-parts',
  templateUrl: 'parts.html',
})
export class PartsPage {

  transferDate: string;
  transfers = [];
  tomorrow: Date = new Date();
  drivers = [];
  selectedDriver;
  hotels = [];
  hotel;
  vehicles = [];
  vehicle;
  clients = [];
  client;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public addTransfersPartsProvider: AddTransfersPartsProvider,
              public getDriverProvider: DriverProvider,
              public hotelProvider: HotelProvider,
              public vehicleProvider: VehicleProvider,
              public clientProvider: ClienteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartsPage');
  }

  ngOnInit() {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.transferDate = this.tomorrow.toISOString();
    this.selectTransferByDate();
    this.getDrivers();
    this.getHotel();
    this.getVehicle();
    this.getClient();
  }

  selectTransferByDate() {
    console.log(this.transferDate.slice(0,10));
    this.addTransfersPartsProvider.getByDate(this.transferDate.slice(0,10)).subscribe(
      (res: any) => {
        console.log(res);
        this.transfers = res;
      }, error => console.log(error)
    );
  }

  getDrivers(){
    this.getDriverProvider.getAll().subscribe(
      (res: any) => {
        console.log(res);
        this.drivers = res;
      }, error => console.log(error)
    );
  }
  getHotel(){
    this.hotelProvider.getAll().subscribe(
      (res: any) => {
        console.log(res);
        this.hotels = res;
      }, error => console.log(error)
    );
  }
  getVehicle(){
    this.vehicleProvider.getAllVehicles().subscribe(
          (vehicles) => this.vehicles = vehicles,
          (error) => console.error(error)
    )
  }

  getClient(){
    this.clientProvider.getAll().subscribe(
      (res: any) => {
        console.log(res);
        this.clients = res;
      }, error => console.log(error)
    );
  }

  addTransfer(transferDate, transferTime, origin, destiny, name, seats, company, directionCompany, description) {
    console.log(name, destiny, origin, seats,
      company, directionCompany, transferDate,
      transferTime, description, this.selectedDriver, this.hotel, this.vehicle, this.client);

    this.addTransfersPartsProvider.addTransfer(name, destiny, origin, seats,
      company, directionCompany, transferDate,
      transferTime, description, this.selectedDriver, this.vehicle, this.hotel, this.client).subscribe(
      (res: any) => {
        console.log(res);
      }, error => console.log(error)
    );
  }

  selectDriver(selectedDriver: string) {
    this.selectedDriver = selectedDriver;
  }

  selectHotel(hotel: string) {
    this.hotel = hotel;
  }

  selectVehicle(vehicle: string) {
    this.vehicle = vehicle;
  }

  selectClient(client: string) {
    this.client = client;
  }
}
