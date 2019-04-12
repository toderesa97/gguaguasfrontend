import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ServerConfig} from "../serverConfig";

@Injectable()
export class DriverProvider {
  private readonly httpOptions;
  private serverConf = new ServerConfig();

  private url:string = this.serverConf.getServerUrl().concat("repositorioBitBucket/gguaguasbackend/driver/");


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
    return this.http.get(this.url.concat("getAll.php"));
  }

  remove(id) {
    let params = new HttpParams().append('id', id);
    return this.http.post<any>(this.url.concat("remove.php"), params,this.httpOptions);
  }

}
