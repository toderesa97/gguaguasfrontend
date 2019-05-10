export class Session {

  private static _username:string = "";
  private static _token:string = "";
  private static _role:string = "";

  public constructor() {

  }

  public static setUsername(username) {
    Session._username = username;
    return this;
  }

  public static setToken(token) {
    Session._token = token;
    return this;
  }

  public static setRole(role) {
    Session._role = role;
    return this;
  }

  public static isSet() {
    return Session._token !== "";
  }

  public static clear() {
    Session._username = "";
    Session._token = "";
    Session._role = "";
  }

  static get username(): string {
    return Session._username;
  }

  static get token(): string {
    return Session._token;
  }

  static get role(): string {
    return Session._role;
  }
}
