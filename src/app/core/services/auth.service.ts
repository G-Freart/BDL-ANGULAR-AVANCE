import { Injectable } from '@angular/core';
import {BdlReactiveService} from "../../../../projects/bdl/src/lib/interfaces/bdl-react-servvice";
import {BehaviorSubject} from "rxjs";
import {BdlUser} from "../interface/bdl-user";
import {BdlCredentials} from "../interface/bdl-credentials";

export interface AuthDataType extends BdlUser {}

export enum  AuthCommandType {
  REGISTER,
  CONNECT,
  DISCONNECT
}

@Injectable()
export class AuthService implements BdlReactiveService<AuthDataType | null, AuthCommandType>{

  data$ = new BehaviorSubject<AuthDataType | null>(null);

  execute(command: AuthCommandType.CONNECT,    payload: BdlCredentials)           : void;
  execute(command: AuthCommandType.DISCONNECT, payload: null)                     : void;
  execute(command: AuthCommandType.REGISTER,   payload: Omit<AuthDataType, 'id'>) : void;
  execute(command: AuthCommandType, payload: any): void {
    console.log(command, payload);
  }
}
