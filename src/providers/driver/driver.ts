import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ServerConfig} from "../serverConfig";
import {Session} from "../Session";

@Injectable()
export class DriverProvider {
  private readonly httpOptions;
  private serverConf = new ServerConfig();

  private url:string = this.serverConf.getRootDir().concat("driver/");


  constructor(public http: HttpClient) {
    this.httpOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    console.log('Hello DriverProvider Provider');
  }

  add(name: string, surname: string, socialSecurityNumber: string, email: string): Observable<any>{

    let params = new HttpParams()
      .append('name', name)
      .append('surname', surname)
      .append('socialSecurityNumber', socialSecurityNumber)
      .append('email', email);

    return this.http.post<any>(this.url.concat("add.php"), params,this.httpOptions);
  }

  getById(id){
    let param = new HttpParams().append('id', id);
    return this.http.post<any>(this.url.concat("get.php"), param, this.httpOptions);
  }

  getAll(){
    let params = new HttpParams().append('username', Session.username)
      .append('token', Session.token);
    return this.http.post<any>(this.url.concat("getAll.php"),params,this.httpOptions);
  }

  remove(id) {
    let params = new HttpParams().append('id', id);
    return this.http.post<any>(this.url.concat("remove.php"), params,this.httpOptions);
  }

  getBySocialSecurityNumber(socialSecurityNumber){
    let param = new HttpParams().append('socialSecurityNumber', socialSecurityNumber);
    return this.http.post<any>(this.url.concat("getBySSNumber.php"), param, this.httpOptions);
  }

}
