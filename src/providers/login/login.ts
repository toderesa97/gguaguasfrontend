import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from "../serverConfig";
import {Storage} from "@ionic/storage";

@Injectable()
export class LoginProvider {

  private serverConf = new ServerConfig();
  private url:string = this.serverConf.getRootDir().concat("auth/");
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(public http: HttpClient,
              public storage:Storage) {
    console.log('Hello LoginProvider Provider');
  }

  login(username: string, password: string) {
    let params = new HttpParams()
      .append("username", username)
      .append("password", password);
    return this.http.post<any>(this.url.concat("login.php"), params, this.httpOptions);
  }

  async logout() {
    let observable;
    await this.storage.get("session").then((data) => {
      let params = new HttpParams()
        .append("username", data.username)
        .append("token", data.token);

      observable = this.http.post<any>(this.url.concat("logout.php"), params, this.httpOptions);
    });
    return observable;
  }
}
