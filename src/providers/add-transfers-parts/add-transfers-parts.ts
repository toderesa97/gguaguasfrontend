import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from '../serverConfig';
import { Storage } from "@ionic/storage";
import {Observable} from "rxjs";

@Injectable()
export class AddTransfersPartsProvider {

  private serverConf = new ServerConfig();
  private url:string = this.serverConf.getRootDir().concat("transfers");
  private readonly httpOptions;
  private username: string;
  private token: string;

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello AddTransfersPartsProvider Provider');
  }

  getByDate(transferDate){
    let param;
    this.getCredentials();
    param = new HttpParams().append('transferDate', transferDate)
                            .append('username', this.username)
                            .append('token', this.token);
    return this.http.post<any>(this.url.concat("/getByDate.php"), param, this.httpOptions);
  }

  private getCredentials() {
    this.storage.get("session").then((data) => {
      this.username = data.username;
      this.token = data.token;
    });
  }

  addTransfer(name: string, destiny: string, origin: string, seats: string,
              company: string, directionCompany: string, transferDate: string,
              transferTime: string,description: string, driver:string, vehicle:string, hotel:string, client:string): Observable<any> {

    let params = new HttpParams().append('add', "")
      .append('name', name)
      .append('destiny', destiny)
      .append('origin', origin)
      .append('seats', seats)
      .append('company', company)
      .append('directionCompany', directionCompany)
      .append('transferDate', transferDate)
      .append('transferTime', transferTime)
      .append('description', description)
      .append('driver', driver)
      .append('hotel', hotel)
      .append('vehicle', vehicle)
      .append('client', client);

    return this.http.post<any>(this.url.concat("/addTransfer.php"), params, this.httpOptions);
  }
}
