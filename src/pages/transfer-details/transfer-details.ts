import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ClienteProvider} from "../../providers/cliente/cliente";
import {DriverProvider} from "../../providers/driver/driver";
import {HotelProvider} from "../../providers/hotel/hotel";
import {VehicleProvider} from "../../providers/vehicle/vehicle";

@IonicPage()
@Component({
  selector: 'page-transfer-details',
  templateUrl: 'transfer-details.html',
})
export class TransferDetailsPage {

  title: any;
  dataKeys: any[] = [];
  dataValues: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public clientProvider: ClienteProvider,
              public driverProvider: DriverProvider,
              public hotelProvider: HotelProvider,
              public vehicleProvider: VehicleProvider) {
    console.log(this.navParams.get('id'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferDetailsPage');
    this.initializeModal();
  }
  
  initializeModal(){
    switch (this.navParams.get('table')) {
      case 'client': {
        this.showClientData();
        break;
      }
      case 'driver': {
        this.showDriverData();
        break;
      }
      case 'hotel': {
        this.showHotelData();
        break;
      }
      case 'vehicle': {
        this.showVehicleData();
        break;
      }
    }
  }

  showClientData(){
    let aux: any[] = [];
    this.clientProvider.getByCif(this.navParams.get('id')).subscribe(
      (res)=>{
        console.log('client',res);
        aux.push(res);
        aux.map(
          (key)=>{
            Object.keys(key).forEach((i)=>{
              this.dataKeys.push(i);
              this.dataValues.push(key[i]);
            })
          }
        );
      }
    );
  }

  showVehicleData(){
    let aux: any[] = [];
    this.vehicleProvider.get(this.navParams.get('id')).then(
      (res) => {
        res.subscribe(
          (vehicleData)=>{
            console.log('vehicle',vehicleData);
            aux.push(vehicleData);
            aux.map(
              (key)=>{
                Object.keys(key).forEach((i)=>{
                  this.dataKeys.push(i);
                  this.dataValues.push(key[i]);
                })
              }
            );
          }
        )
      }
    );
  }

  showHotelData(){
    let aux: any[] = [];
    this.hotelProvider.getByHotelCif(this.navParams.get('id')).subscribe(
      (res) => {
        console.log('hotel',res);
        aux.push(res);
        aux.map(
          (key)=>{
            Object.keys(key).forEach((i)=>{
              this.dataKeys.push(i);
              this.dataValues.push(key[i]);
            })
          }
        );
      }
    );
  }

  showDriverData(){
    let aux: any[] = [];
    this.driverProvider.getBySocialSecurityNumber(this.navParams.get('id')).subscribe(
      (res) => {
        console.log('driver',res);
        aux.push(res);
        aux.map(
          (key)=>{
            Object.keys(key).forEach((i)=>{
              this.dataKeys.push(i);
              this.dataValues.push(key[i]);
            })
          }
        );
      }
    );
  }

}
