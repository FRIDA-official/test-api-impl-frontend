import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './models/form/form.component';
import { FormGroup, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OAuthModule, OAuthService, UrlHelperService} from 'angular-oauth2-oidc';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RentenServiceService} from './services/renten-service.service';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    AppModule,
    FormGroup,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientTestingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OAuthModule.forRoot()
  ],
  exports:[
    FormsModule,
    FormGroup,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientTestingModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    RentenServiceService,
    UrlHelperService,
    OAuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
