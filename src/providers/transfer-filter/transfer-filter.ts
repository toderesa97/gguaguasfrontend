import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from "../serverConfig";
import {Storage} from "@ionic/storage";
import {Session} from "../Session";

@Injectable()
export class TransferFilterProvider {

  private serverConf = new ServerConfig();
  private url:string = this.serverConf.getRootDir().concat("transfers/");
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(public http: HttpClient,
              public storage: Storage) {
    console.log('Hello TransferFilterProvider Provider');
  }

  async getAll() {
    let observable;
    await this.storage.get("session").then((data) => {
      let params = new HttpParams()
        .append("username", data.username)
        .append("token", Session.token);

      observable = this.http.post<any>(this.url.concat("getAll.php"), params, this.httpOptions);
    });
    return observable;
  }

  async createTransfer(transferDate: string, transferTime: string, origin: string,
                 destiny: string, name: string, seats: string, description: string, selectedDriver: string) {
    let observable;
    await this.storage.get("session").then((data) => {
      let params = new HttpParams().append('createTransfer',"")
        .append('name', name)
        .append('destiny', destiny)
        .append('origin', origin)
        .append('seats', seats)
        .append('transferDate', transferDate)
        .append('transferTime', transferTime)
        .append('description', description)
        .append('selectedDriver', selectedDriver);
      observable = this.http.post<any>(this.url.concat("/createTransfer.php"), params,this.httpOptions);
    });

  }

  getAllDrivers(){
    return this.http.get(this.url.concat("getAllDrivers.php"));
  }

  getAllHotels(){
    return this.http.get(this.url.concat("getAllHotels.php"));
  }

  getAllVehicles(){
    return this.http.get(this.url.concat("getAllVehicles.php"));
  }

  async getDriver(driver: string) {
    let observable;
    await this.storage.get("session").then((data) => {
      let params = new HttpParams()
        .append("username", data.username)
        .append("token", Session.token)
        .append("driver", driver);
      observable = this.http.post<any>(this.url.concat("getDriver.php"), params, this.httpOptions);
    });
    return observable;
  }

  async getHotel(hotel: string) {
    let observable;
    await this.storage.get("session").then((data) => {
      let params = new HttpParams()
        .append("username", data.username)
        .append("token", Session.token)
        .append("hotel", hotel);
      observable = this.http.post<any>(this.url.concat("getHotel.php"), params, this.httpOptions);
    });
    return observable;
  }

  async getVehicle(vehicle: string) {
    let observable;
    await this.storage.get("session").then((data) => {
      let params = new HttpParams()
        .append("username", data.username)
        .append("token", Session.token)
        .append("vehicle", vehicle);
      observable = this.http.post<any>(this.url.concat("getVehicle.php"), params, this.httpOptions);
    });
    return observable;
  }

}
