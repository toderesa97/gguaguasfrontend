import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VehicleProvider {

  private url:string = "http://localhost/gguaguas/";

  constructor(public http: HttpClient) {
    console.log('Hello VehicleProvider Provider');
  }

  getAllVehicles() {
    return this.http.get(this.url.concat("get/vehicles.php"));
  }

  add(licensePlate: string, vechicleBrand: string, vehicleSeats: string) {
    return this.http.get(this.url.concat("add/vehicle.php?licensePlate=")
      .concat(licensePlate).concat("&brand=")
      .concat(vechicleBrand).concat("&seats=").concat(vehicleSeats));
  }

  delete(lisencePlate: string) {
    return this.http.get(this.url.concat("remove/vehicle.php?licensePlate=").concat(lisencePlate));
  }
}
