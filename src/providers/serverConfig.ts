export class ServerConfig {

  private url:string = "http://192.168.1.46/";

  public constructor() {}


  public getServerUrl() : string {
    return this.url;
  }

}
