import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from "../serverConfig";
import {Storage} from "@ionic/storage";
import {Observable} from "rxjs";
import {Session} from "../Session";


/*
  Generated class for the TransferFilterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
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

  getAll() {
    let params = new HttpParams()
      .append("username", Session.username)
      .append("token", Session.token);

    return this.http.post<any>(this.url.concat("getAll.php"), params, this.httpOptions);
  }

  createTransfer(transferDate: string, transferTime: string, origin: string,
                 destiny: string, name: string, seats: string, description: string, selectedDriver: string) {
      let params = new HttpParams().append('createTransfer',"")
        .append('name', name)
        .append('destiny', destiny)
        .append('origin', origin)
        .append('seats', seats)
        .append('transferDate', transferDate)
        .append('transferTime', transferTime)
        .append('description', description)
        .append('selectedDriver', selectedDriver)
        .append('username', Session.username)
        .append('token', Session.token);
      return this.http.post<any>(this.url.concat("/createTransfer.php"), params,this.httpOptions);
  }
}
