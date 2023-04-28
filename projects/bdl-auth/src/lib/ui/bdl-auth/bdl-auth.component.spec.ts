import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdlAuthComponent } from './bdl-auth.component';
import {BdlDefaultAuthenticationServiceService} from "../../services/bdl-default-authentication-service.service";
import {TOKEN_DEFAULT_AUTH_SERVICE} from "../../tokens/token-default-auth-service";
import {BdlAuthenticationService} from "../../interfaces/bdl-authentication-service";
import {BdlAuthCredentials} from "../../interfaces/bdl-auth-credentials";
import {TOKEN_AUTH_SERVICE} from "../../tokens/token-auth-service";

const MockService : BdlAuthenticationService = {

  connect(credentials: BdlAuthCredentials): boolean {
    return false;
  }
}

const MockExternalService : BdlAuthenticationService = {

  connect(credentials: BdlAuthCredentials): boolean {
    return false;
  }
}

describe('BdlAuthComponent', () =>  {


  describe('Default Service', () => {
    let component: BdlAuthComponent;
    let fixture: ComponentFixture<BdlAuthComponent>;


    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          BdlAuthComponent
        ],
        providers: [
          {
            provide: TOKEN_DEFAULT_AUTH_SERVICE,
            useValue: MockService
          }
        ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(BdlAuthComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it ('should have service', () => {

      fixture.detectChanges();
      expect(component.authenticationService).toBe(MockService)
    })
  });

  describe('External Service', () => {
    let component: BdlAuthComponent;
    let fixture: ComponentFixture<BdlAuthComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          BdlAuthComponent
        ],
        providers: [
          {
            provide: TOKEN_AUTH_SERVICE,
            useValue: MockExternalService
          },
          {
            provide: TOKEN_DEFAULT_AUTH_SERVICE,
            useValue: MockService
          }
        ]
      })
        .compileComponents();

      fixture = TestBed.createComponent(BdlAuthComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it ('should have external service', () => {
      expect(component.authenticationService).toBe(MockExternalService)
    })
  });
})

