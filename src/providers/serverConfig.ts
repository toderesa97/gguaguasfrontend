export class ServerConfig {

  private url:string = "http://localhost/";

  public constructor() {}


  public getServerUrl() : string {
    return this.url;
  }

}
