import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class AddMinibusServiceProvider {

  private url:string = "http://localhost/www/ServiceMiniBus.php";
  private readonly httpOptions;

  constructor(public http: HttpClient) {
    console.log('Hello AddMinibusServiceProvider Provider');
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
      .append('vehicle', vehicle);

    return this.http.post<any>(this.url, params,this.httpOptions);
  }

  getById(id, vehicle: string){
    let param = new HttpParams().append('id', id)
      .append('vehicle', vehicle);
    return this.http.post<any>(this.url, param, this.httpOptions);
  }

  getAll(vehicle: string){
    let param = new HttpParams().append('all',"")
      .append('vehicle',vehicle);
    return this.http.post<any>(this.url, param, this.httpOptions);
  }

}
