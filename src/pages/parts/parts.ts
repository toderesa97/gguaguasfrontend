import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddTransfersPartsProvider} from "../../providers/add-transfers-parts/add-transfers-parts";
import {DriverProvider} from "../../providers/driver/driver";
import {TransferFilterProvider} from "../../providers/transfer-filter/transfer-filter";

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


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public addTransfersPartsProvider: AddTransfersPartsProvider,
              public getDriverProvider: DriverProvider,
              public transferFilterProvider: TransferFilterProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartsPage');
  }

  ngOnInit() {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.transferDate = this.tomorrow.toISOString();
    this.selectTransferByDate();
    this.getDrivers();
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

  createTransfer(transferDate, transferTime, origin, destiny, name, seats, description) {
    console.log(transferDate, transferTime, origin, destiny, name, seats, description, this.selectedDriver);

    this.transferFilterProvider.createTransfer(transferDate, transferTime, origin,
                                                  destiny, name, seats, description, this.selectedDriver);
  }

  selectDriver(selectedDriver: string) {
    this.selectedDriver = selectedDriver;
  }
}
