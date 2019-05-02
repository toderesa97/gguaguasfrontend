import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfig} from "../serverConfig";
import {Observable} from "rxjs";

@Injectable()
export class AddTransfersPartsProvider {

  private serverConf = new ServerConfig();
  private url:string = this.serverConf.getRootDir().concat("services");
  private readonly httpOptions;

  constructor(public http: HttpClient) {
    console.log('Hello AddTransfersPartsProvider Provider');
  }

  getByDate(transferDate){
      let param = new HttpParams().append('transferDate', transferDate);
      return this.http.post<any>(this.url.concat("/getByDate.php"), param, this.httpOptions);
  }

  createTransfer(transferDate: string, transferTime: string, origin: string,
                 destiny: string, name: string, seats: string, description: string, selectedDriver: string): Observable<any>{

    let params = new HttpParams().append('createTransfer',"")
      .append('name', name)
      .append('destiny', destiny)
      .append('origin', origin)
      .append('seats', seats)
      .append('transferDate', transferDate)
      .append('transferTime', transferTime)
      .append('description', description)
      .append('selectedDriver', selectedDriver)

    return this.http.post<any>(this.url.concat("/createTransfer.php"), params,this.httpOptions);
  }
}
