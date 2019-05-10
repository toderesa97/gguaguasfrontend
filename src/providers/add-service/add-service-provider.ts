import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ServerConfig} from "../serverConfig";
import {Session} from "../Session";


@Injectable()
export class AddServiceProvider {

  private serverConf = new ServerConfig();
  private url:string = this.serverConf.getRootDir().concat("services");
  private readonly httpOptions;

  constructor(public http: HttpClient) {
    console.log('Hello AddServiceProvider Provider');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
  }

  add(name: string, destiny: string, origin: string, seats: string,
      company: string,directionCompany: string, transferDate: string,
      transferTime: string,description: string, vehicle:string): Observable<any>{

    let params = new HttpParams().append('add',"")
      .append('name', name)
      .append('destiny', destiny)
      .append('origin', origin)
      .append('seats', seats)
      .append('company', company)
      .append('directionCompany', directionCompany)
      .append('transferDate', transferDate)
      .append('transferTime', transferTime)
      .append('description', description)
      .append('vehicle', vehicle)
      .append('username', Session.username)
      .append('token', Session.token);

    return this.http.post<any>(this.url.concat("/add.php"), params,this.httpOptions);
  }

  getById(id, vehicle: string){
    let param = new HttpParams().append('id', id)
      .append('vehicle', vehicle)
      .append("username", Session.username)
      .append("token", Session.token);
    return this.http.post<any>(this.url.concat("/getById.php"), param, this.httpOptions);
  }

  getAll(vehicle: string){
    let param = new HttpParams().append('all',"")
      .append('vehicle',vehicle)
      .append('username',Session.username)
      .append('token',Session.token);
    return this.http.post<any>(this.url.concat("/getAll.php"), param, this.httpOptions);
  }

  deleteById(id, vehicle: string){
    let param = new HttpParams().append('id', id)
      .append('vehicle', vehicle)
      .append('username', Session.username)
      .append('token', Session.token);
    return this.http.post<any>(this.url.concat("/remove.php"), param, this.httpOptions);
  }


  modifyById(id, name: any, destiny: string, origin: any, seats: string, company: string,
             directionCompany: string, transferDate: string, transferTime: string, description: any,
             vehicle: string | string | any) {
    let param = new HttpParams().append('id', id)
      .append('name', name)
      .append('destiny', destiny)
      .append('origin', origin)
      .append('seats', seats)
      .append('company', company)
      .append('directionCompany', directionCompany)
      .append('transferDate', transferDate)
      .append('transferTime', transferTime)
      .append('description', description)
      .append('vehicle', vehicle)
      .append('username', Session.username)
      .append('token', Session.token);
    return this.http.post<any>(this.url.concat("/modify.php"), param, this.httpOptions);
  }
}
