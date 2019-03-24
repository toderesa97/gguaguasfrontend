import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";


/*
  Generated class for the AddMinibusServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddMinibusServiceProvider {

  private url:string = "http://localhost/www/gguaguas/ServiceMiniBus.php";
  private httpOptions;

  constructor(public http: HttpClient) {
    console.log('Hello AddMinibusServiceProvider Provider');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
  }

  add(name: string, destiny: string, origin: string, seats: number,
      company: string,directionCompany: string, transferDate: string,
      transferTime: string,description: string): Observable<any>{

    let params = new HttpParams().append('add',"")
      .append('name', name)
      .append('destiny', destiny)
      .append('origin', origin)
      .append('seats', seats.toString())
      .append('company', company)
      .append('directionCompany', directionCompany)
      .append('transferDate', transferDate)
      .append('transferTime', transferTime)
      .append('description', description);

    return this.http.post<any>(this.url, params,this.httpOptions);

  }

  getById(id){
    return this.http.post<any>(this.url, id, this.httpOptions);
  }

}
