import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from "../serverConfig";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class AddTransfersFiltersProvider {

  private serverConf = new ServerConfig();
  private url:string = this.serverConf.getRootDir().concat("services");
  private readonly httpOptions;


  constructor(public http: HttpClient) {
    console.log('Hello AddTransfersFiltersProvider Provider');
  }

  getByDate(transferDate){
      let param = new HttpParams().append('transferDate', transferDate);
      return this.http.post<any>(this.url.concat("/getByDate.php"), param, this.httpOptions);
  }

  add(type: string, typeDate: string): Observable<any>{

    let params = new HttpParams()
      .append('type', type)
      .append('typeDate', typeDate);

    return this.http.post<any>(this.url.concat("add.php"), params,this.httpOptions);
  }

  getById(id){
    let param = new HttpParams().append('id', id);
    return this.http.post<any>(this.url.concat("get.php"), param, this.httpOptions);
  }

  getAll(){
    return this.http.get(this.url.concat("getAll.php"));
  }

  getAllClients(){
    return this.http.get(this.url.concat("getAllClients.php"));
  }

  remove(hotelCif) {
    let params = new HttpParams().append('hotelCif', hotelCif);
    return this.http.post<any>(this.url.concat("remove.php"), params,this.httpOptions);
  }

}

