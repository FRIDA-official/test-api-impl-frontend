import { Component, OnInit } from '@angular/core';
import { OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import {authCodeFlowConfig } from './auth/OAuth2Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    {provide: OAuthService, useClass: OAuthService}
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent{


  constructor(public oauthService: OAuthService){
    this.oauthService.configure(authCodeFlowConfig);
    //this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  title = 'angularclient';
}
