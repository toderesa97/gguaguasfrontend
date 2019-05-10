import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ServerConfig} from "../serverConfig";
import {Session} from "../Session";

@Injectable()
export class HotelProvider {
  private readonly httpOptions;
  private serverConf = new ServerConfig();

  private url:string = this.serverConf.getRootDir().concat("hotel/");


  constructor(public http: HttpClient) {
    this.httpOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    console.log('Hello HotelProvider Provider');
  }

  add(hotelCif: string, cif: string, hotelName: string, hotelEmail: string, nickname: string): Observable<any>{

    let params = new HttpParams()
      .append('hotelCif', hotelCif)
      .append('cif', cif)
      .append('hotelName', hotelName)
      .append('hotelEmail', hotelEmail)
      .append('nickname', nickname);

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

  getAllClients(){
    return this.http.get(this.url.concat("getAllClients.php"));
  }

  remove(hotelCif) {
    let params = new HttpParams().append('hotelCif', hotelCif);
    return this.http.post<any>(this.url.concat("remove.php"), params,this.httpOptions);
  }

  getByHotelCif(hotelCif){
    let param = new HttpParams().append('hotelCif', hotelCif);
    return this.http.post<any>(this.url.concat("getByHotelCif.php"), param, this.httpOptions);
  }

}
