export class ServerConfig {

  private url:string = "http://192.168.1.38/";

  public constructor() {}


  public getServerUrl() : string {
    return this.url;
  }

}
