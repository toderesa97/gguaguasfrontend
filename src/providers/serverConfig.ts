export class ServerConfig {

  private server:string = "http://localhost/";
  private rootDir:string = "gguaguas/";

  public constructor() {}


  public getServerUrl() : string {
    return this.server;
  }

  public getRootDir() : string {
    return this.server.concat(this.rootDir);
  }

}
