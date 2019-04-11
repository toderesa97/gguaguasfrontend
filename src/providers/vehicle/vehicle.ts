import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from "../serverConfig";

@Injectable()
export class VehicleProvider {

  private serverConf = new ServerConfig();

  private url:string = this.serverConf.getServerUrl().concat("gguaguasbackend/gguaguasbackend/");

  constructor(public http: HttpClient) {
    console.log('Hello VehicleProvider Provider');
  }

  getAllVehicles() {
    return this.http.get(this.url.concat("vehicle/getAll.php"));
  }

  add(licensePlate: string, vechicleBrand: string, vehicleSeats: string) {
    return this.http.get(this.url.concat("vehicle/add.php?licensePlate=")
      .concat(licensePlate).concat("&brand=")
      .concat(vechicleBrand).concat("&seats=").concat(vehicleSeats));
  }

  delete(licensePlate: string) {
    return this.http.get(this.url.concat("vehicle/remove.php?licensePlate=").concat(licensePlate));
  }

  get(licensePlate: string) {
    console.log("provider ---> ", licensePlate);
    return this.http.get(this.url.concat("vehicle/get.php?licensePlate=").concat(licensePlate));
  }
}
