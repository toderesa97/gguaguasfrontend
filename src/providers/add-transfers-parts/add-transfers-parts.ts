import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from "../serverConfig";

/*
  Generated class for the AddTransfersPartsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddTransfersPartsProvider {

  private serverConf = new ServerConfig();
  private url:string = this.serverConf.getServerUrl().concat("gguaguasbackend/services");
  private readonly httpOptions;

  constructor(public http: HttpClient) {
    console.log('Hello AddTransfersPartsProvider Provider');
  }

  getByDate(transferDate){
      let param = new HttpParams().append('transferDate', transferDate);
      return this.http.post<any>(this.url.concat("/getByDate.php"), param, this.httpOptions);
  }

}
