import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ServerConfig} from "../serverConfig";

@Injectable()
export class ClienteProvider {
  private readonly httpOptions;
  private serverConf = new ServerConfig();

  private url:string = this.serverConf.getServerUrl().concat("gguaguasbackend/gguaguasbackend/client/");


  constructor(public http: HttpClient) {
    this.httpOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    console.log('Hello ClienteProvider Provider');
  }

  add(name: string, email: string, cif: string, razonSocial: string): Observable<any>{

    let params = new HttpParams()
      .append('nickname', name)
      .append('email', email)
      .append('cif', cif)
      .append('clientName', razonSocial);

    return this.http.post<any>(this.url.concat("add.php"), params,this.httpOptions);
  }

  getById(id){
    let param = new HttpParams().append('id', id);
    return this.http.post<any>(this.url.concat("get.php"), param, this.httpOptions);
  }

  getAll(){
    let param = new HttpParams().append('all',"");
    return this.http.post<any>(this.url.concat("getAll.php"), param, this.httpOptions);
  }

}
