import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from "../serverConfig";
import { Storage } from "@ionic/storage";
import {Session} from "../Session";

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

  getAllVehicles() {
    let params = new HttpParams()
      .append("username", Session.username)
      .append("token", Session.token);
    console.log("getting all", Session.username, Session.token);
    return this.http.post<any>(this.url.concat("getAll.php"), params, this.httpOptions);
  }

  add(licensePlate: string, vehicleBrand: string, vehicleSeats: string) {
    let params = new HttpParams()
      .append("username", Session.username)
      .append("token", Session.token)
      .append("licensePlate", licensePlate)
      .append("seats", vehicleSeats)
      .append("brand", vehicleBrand);
    return this.http.post<any>(this.url.concat("add.php"), params, this.httpOptions);
  }

  delete(licensePlate: string) {
    let params = new HttpParams()
      .append("username", Session.username)
      .append("token", Session.token)
      .append("licensePlate", licensePlate);

    return this.http.post<any>(this.url.concat("remove.php"), params, this.httpOptions);
  }

  get(licensePlate: string) {
    let params = new HttpParams()
      .append("username", Session.username)
      .append("token", Session.token)
      .append("licensePlate", licensePlate);
    return this.http.post<any>(this.url.concat("get.php"), params, this.httpOptions);
  }

  updateVehicle(licensePlate: string, vehicleSeats: string, vehicleBrand: string) {
    let params = new HttpParams()
      .append("username", Session.username)
      .append("token", Session.token)
      .append("brand", vehicleBrand)
      .append("seats", vehicleSeats)
      .append("licensePlate", licensePlate);

    return this.http.post<any>(this.url.concat("update.php"), params, this.httpOptions);
  }
}
