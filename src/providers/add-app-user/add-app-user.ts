import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import {ServerConfig} from "../serverConfig";

/*
  Generated class for the AddAppUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddAppUserProvider {

  private readonly httpOptions;
  private serverConf = new ServerConfig();

  private url:string = this.serverConf.getRootDir().concat("management/");

  constructor(public http: HttpClient,
              public storage : Storage) {
    console.log('Hello AddAppUserProvider Provider');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
  }

  async add(newAppUsername: string, accountType: string, password : string) {
    let observable;
    await this.storage.get("session").then((data) => {
      let params = new HttpParams()
        .append("newUsername", newAppUsername)
        .append("accountType", accountType)
        .append("username", data.username)
        .append("password", password)
        .append("token", data.token);

      observable = this.http.post<any>(this.url.concat("addAppUser.php"), params, this.httpOptions);
    });
    return observable;
  }
}
