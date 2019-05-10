import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from '../serverConfig';
import { Storage } from "@ionic/storage";
import {Session} from "../Session";

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
    let param = new HttpParams().append('transferDate', transferDate)
      .append('username', Session.username)
      .append('token', Session.token);
    return  this.http.post<any>(this.url.concat("/getByDate.php"), param, this.httpOptions);
  }
}
