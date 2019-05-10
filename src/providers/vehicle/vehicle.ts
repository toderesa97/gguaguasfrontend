import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from "../serverConfig";
import { Storage } from "@ionic/storage";
import {Observable} from "rxjs";

@Injectable()
export class VehicleProvider {

  private serverConf = new ServerConfig();
  private url:string = this.serverConf.getRootDir().concat("vehicle/");
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(public http: HttpClient,
              public storage : Storage) {
    console.log('Hello VehicleProvider Provider');
  }

  async getAllVehicles() {
    let observable;
    await this.storage.get("session").then((data) => {
      let params = new HttpParams()
        .append("username", data.username)
        .append("token", data.token);

      observable = this.http.post<any>(this.url.concat("getAll.php"), params, this.httpOptions);
    });
    return observable;
  }

  async add(licensePlate: string, vehicleBrand: string, vehicleSeats: string) {
    let observable;
    await this.storage.get("session").then((data) => {
      let params = new HttpParams()
        .append("username", data.username)
        .append("token", data.token)
        .append("licensePlate", licensePlate)
        .append("seats", vehicleSeats)
        .append("brand", vehicleBrand);
      observable = this.http.post<any>(this.url.concat("add.php"), params, this.httpOptions);
    });
    return observable;
  }

  async delete(licensePlate: string) {
    let observable: Observable<any>;
    await this.storage.get("session").then((data) => {
      let params = new HttpParams()
        .append("username", data.username)
        .append("token", data.token)
        .append("licensePlate", licensePlate);

      observable = this.http.post<any>(this.url.concat("remove.php"), params, this.httpOptions);
    });
    return observable;
  }

  async get(licensePlate: string) {
    let observable;
    await this.storage.get("session").then((data) => {
      let params = new HttpParams()
        .append("username", data.username)
        .append("token", data.token)
        .append("licensePlate", licensePlate);

      observable = this.http.post<any>(this.url.concat("get.php"), params, this.httpOptions);
    });
    return observable;
  }

  async updateVehicle(licensePlate: string, vehicleSeats: string, vehicleBrand: string) {
    console.log("updating...", licensePlate);
    let observable;
    await this.storage.get("session").then((data) => {
      let params = new HttpParams()
        .append("username", data.username)
        .append("token", data.token)
        .append("brand", vehicleBrand)
        .append("seats", vehicleSeats)
        .append("licensePlate", licensePlate);

      observable = this.http.post<any>(this.url.concat("update.php"), params, this.httpOptions);
    });
    return observable;
  }
}
