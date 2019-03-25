import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VehicleProvider {

  private url:string = "http://127.0.0.1/gguaguas/";

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
