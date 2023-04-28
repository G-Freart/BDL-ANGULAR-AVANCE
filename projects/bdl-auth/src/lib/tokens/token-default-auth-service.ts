import {InjectionToken} from "@angular/core";
import {BdlAuthenticationService} from "../interfaces/bdl-authentication-service";

export const TOKEN_DEFAULT_AUTH_SERVICE = new InjectionToken<BdlAuthenticationService>('TOKEN_DEFAULT_AUTH_SERVICE');
