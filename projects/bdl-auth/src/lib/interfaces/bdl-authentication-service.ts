import {BdlAuthCredentials} from "./bdl-auth-credentials";

export interface BdlAuthenticationService {
  connect (credentials: BdlAuthCredentials) : boolean;
}
