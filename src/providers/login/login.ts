import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from "../serverConfig";
import {Storage} from "@ionic/storage";
import {Session} from "../Session";

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

  logout() {
    console.log("Logging out", Session.username, Session.token);
    let params = new HttpParams()
      .append("username", Session.username)
      .append("token", Session.token);

    return this.http.post<any>(this.url.concat("logout.php"), params, this.httpOptions);
  }
}
