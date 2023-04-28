import {Component, EventEmitter, Inject, Input, Optional, Output} from '@angular/core';
import {BdlAuthCredentials} from "../../interfaces/bdl-auth-credentials";
import {BdlAuthenticationService} from "../../interfaces/bdl-authentication-service";
import {TOKEN_AUTH_SERVICE} from "../../tokens/token-auth-service";
import {TOKEN_DEFAULT_AUTH_SERVICE} from "../../tokens/token-default-auth-service";

@Component({
  selector: 'auth-bdl-auth',
  templateUrl: './bdl-auth.component.html',
  styleUrls: ['./bdl-auth.component.css']
})
export class BdlAuthComponent {

    @Input()
    credential? : BdlAuthCredentials

    @Output()
    credentialChange = new EventEmitter<BdlAuthCredentials>()

  authenticationService !: BdlAuthenticationService;

  constructor(
    @Optional() @Inject(TOKEN_AUTH_SERVICE) private externalService:BdlAuthenticationService,
    @Inject(TOKEN_DEFAULT_AUTH_SERVICE)     private defaultService:BdlAuthenticationService
  ) {
    this.authenticationService = externalService || defaultService;
  }
}
