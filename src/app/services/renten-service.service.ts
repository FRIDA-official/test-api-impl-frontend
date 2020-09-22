import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  observe: 'response' as 'response'
};


@Injectable({
  providedIn: 'root'
})
export class RentenServiceService {

  private baseUrl:string;


  constructor(private http : HttpClient, public oauthService: OAuthService) {
    //this.baseUrl = 'https://test-api-impl-backend-jaxrs.herokuapp.com/v2';
    this.baseUrl = 'http://localhost:8080/rest/v2';
  }

  public getRente(formModel: any) {
    console.log(this.oauthService.getAccessToken());
    console.log(this.oauthService.getIdToken());
    console.log(this.oauthService.authorizationHeader());
    console.log(this.oauthService.getGrantedScopes());
    console.log(this.oauthService.hasValidAccessToken());
    console.log(this.oauthService.hasValidIdToken());
    
    return this.http.post(this.baseUrl+"/RentenKalkulation", formModel);
  }
}
