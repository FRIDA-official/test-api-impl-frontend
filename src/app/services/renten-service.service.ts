import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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


  constructor(private http : HttpClient) {
    this.baseUrl = 'https://test-api-impl-backend-jaxrs.herokuapp.com/v2';
  }
/* Die Base URL für die einzelnen Versicherer kann nach Wunsch verändert werden*/
  public getRente(formModel: any, chosenSupplier: any) {
    switch(chosenSupplier){
      case "Versicherer 1":
        return this.http.post(this.baseUrl+"/RentenKalkulation", formModel);
      case "Versicherer 2":
        return this.http.post(this.baseUrl+"/RentenKalkulation", formModel);
      case "Versicherer 3":
        return this.http.post(this.baseUrl+"/RentenKalkulation", formModel);
      default:
        return this.http.post(this.baseUrl+"/RentenKalkulation", formModel);
    }

  }
}
