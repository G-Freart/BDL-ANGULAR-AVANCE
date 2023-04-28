import { Injectable } from '@angular/core';
import {BdlAuthenticationService} from "../interfaces/bdl-authentication-service";
import {BdlAuthCredentials} from "../interfaces/bdl-auth-credentials";

@Injectable()
export class BdlDefaultAuthenticationServiceService implements BdlAuthenticationService {

  constructor() { }

  connect(credentials: BdlAuthCredentials): boolean {
    return true;
  }
}
