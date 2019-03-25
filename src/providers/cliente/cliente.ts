import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteProvider {
  private readonly httpOptions;
  private url: string = "http://localhost/www/clients.php";

  constructor(public http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    console.log('Hello ClienteProvider Provider');
  }

  add(name: string, email: string, cif: string, razonSocial: string): Observable<any>{

    let params = new HttpParams().append('add',"")
      .append('name', name)
      .append('email', email)
      .append('cif', cif)
      .append('razonSocial', razonSocial);

    return this.http.post<any>(this.url, params,this.httpOptions);
  }

  getById(id){
    let param = new HttpParams().append('id', id);
    return this.http.post<any>(this.url, param, this.httpOptions);
  }

  getAll(){
    let param = new HttpParams().append('all',"");
    return this.http.post<any>(this.url, param, this.httpOptions);
  }

}
