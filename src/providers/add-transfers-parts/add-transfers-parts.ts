import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from '../serverConfig';
import { Storage } from "@ionic/storage";

@Injectable()
export class AddTransfersPartsProvider {

  private serverConf = new ServerConfig();
  private url:string = this.serverConf.getRootDir().concat("services");
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
}
