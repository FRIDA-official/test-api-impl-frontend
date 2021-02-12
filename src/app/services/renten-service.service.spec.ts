import { TestBed } from '@angular/core/testing';

import { RentenServiceService } from './renten-service.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {OAuthLogger, OAuthService, UrlHelperService} from 'angular-oauth2-oidc';

describe('RentenServiceService', () => {
  let service: RentenServiceService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        UrlHelperService,
        OAuthService,
        OAuthLogger,
        OAuthService
      ]
    });
    service = TestBed.inject(RentenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getRente()', () =>  {
    spyOn(service, "getRente").and.callThrough();
    service.getRente(null);
    expect(service.getRente).toHaveBeenCalled();
  })

  it('should call getChosenEndpoint()', () =>  {
    spyOn(service, "getChosenEndpoint").and.callThrough();
    service.getChosenEndpoint();
    expect(service.getChosenEndpoint).toHaveBeenCalled();
  })
});
