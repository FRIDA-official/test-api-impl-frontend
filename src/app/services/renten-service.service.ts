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

  public getRente(formModel: any) {
    return this.http.post(this.baseUrl+"/RentenKalkulation", formModel);
  }
}
