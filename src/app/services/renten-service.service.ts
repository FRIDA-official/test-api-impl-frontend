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

  private chosenEndpoint: Endpoint;


  constructor(private http : HttpClient, public oauthService: OAuthService) {
    this.chosenEndpoint = Endpoint.Hannoversche;
    //this.baseUrl = 'http://localhost:8080/rest/v2';
  }
/* Die Base URL für die einzelnen Versicherer kann nach Wunsch verändert werden*/
  public getRente(formModel: any) {
    console.log(this.oauthService.getAccessToken());
    console.log(this.oauthService.getIdToken());
    console.log(this.oauthService.authorizationHeader());
    console.log(this.oauthService.getGrantedScopes());
    console.log(this.oauthService.hasValidAccessToken());

    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: this.oauthService.authorizationHeader(),
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Expose-Headers': 'Authorization',
      'Access-Control-Allow-Headers': 'authorization'
  });

    return this.http.post(this.chosenEndpoint.valueOf()+"/RentenKalkulation", formModel, {
      headers: httpHeaders
    });
  }

  public changeEndpoint(endpoint: Endpoint){
    this.chosenEndpoint = endpoint;
  }

  public getChosenEndpoint(): Endpoint{
    return this.chosenEndpoint;
  }
}

export enum Endpoint {
  Hannoversche = "https://test-api-impl-backend-jaxrs.herokuapp.com/v2",
  VersichererverbandLangen = "https://test-api-impl-backend-nodjs.herokuapp.com/v2",
}
