import { NgModule } from '@angular/core';
import { BdlAuthComponent } from './ui/bdl-auth/bdl-auth.component';
import {BdlDefaultAuthenticationServiceService} from "./services/bdl-default-authentication-service.service";
import {TOKEN_DEFAULT_AUTH_SERVICE} from "./tokens/token-default-auth-service";

@NgModule({
  declarations: [
    BdlAuthComponent,
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [
    {
      provide: TOKEN_DEFAULT_AUTH_SERVICE,
      useExisting: BdlDefaultAuthenticationServiceService
    }
  ]
})
export class BdlAuthModule { }
