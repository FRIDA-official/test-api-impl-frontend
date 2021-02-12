import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {OAuthLogger, OAuthService, UrlHelperService} from 'angular-oauth2-oidc';
import { Endpoint, RentenServiceService } from 'src/app/services/renten-service.service';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit()', () => {
    spyOn(component, "ngOnInit").and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  
  it('should call submitForm()', () =>  {
    spyOn(component, "submitForm").and.callThrough();
    component.submitForm();
    expect(component.submitForm).toHaveBeenCalled();
  });

  it('should call changecheckBox() and be false', () =>  {
    component.form.controls.grundzulagen.setValue(false);
    spyOn(component, "changecheckBox").and.callThrough();
    component.changecheckBox();
    expect(component.changecheckBox).toHaveBeenCalled();
    expect(component.formModel.zulagen.grundzulagen).toBeFalsy();
  });

  
  it('should call changecheckBox() and be true', () =>  {
    component.form.controls.grundzulagen.setValue(true);
    spyOn(component, "changecheckBox").and.callThrough();
    component.changecheckBox();
    expect(component.changecheckBox).toHaveBeenCalled();
    expect(component.formModel.zulagen.grundzulagen).toBeTruthy();
  });

  /*
  describe('getRentenInfo', () => {
    it('makes expected calls', () => {
      component.form.setValue({
      artderVersicherung: {},
      versicherungsbeginn: {},
      datumderStandmitteilung: {},
      datumRentenbeginn: {},
      aktuelleBeitragszahlungen: {},
      aktuellesVorsorgevermögen: {},
      garantiezins: {},
      ausgewiesenederzeitigenÜberschussbeteiligung: {},
      derzeitigeGesamtverzinsung: {},
      höhedergarantiertenAltersrente: {},
      höhederAltersrentebeiderzeitigenÜberschussbeteiligungen: {},
      höhedergarantiertenAltersrentebeiFortzahlungderderzeitigenBeiträge: {},
      fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginn: {},
      fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginnbeiFortzahlungderderzeitigenBeiträge: {},
      hochrechnungdesgarantiertenAltersvorsorgevermögens: {},
      hochrechnungdesAltersvorsorgevermögens: {},
      rentenfaktor: {},
      aktuellerRentenfaktorjeZehnTausendEuroVorsorgeguthaben: {},
      garantierterRentenfaktorjeZehnTausendEuroVorsorgeguthaben: {},
      aktuellejährlichgezahlteZulagen: {},
      zulagen: {
        grundzulagen: {},
        kinderzulagen: { anzahlderKinderdieberücksichtigtwerden: {} }
      },
      kinder: { anzahlderKinder: {}, geburtsDatumDerKinder: {} }
    });
  
      const rentenServiceServiceStub: RentenServiceService = fixture.debugElement.injector.get(
        RentenServiceService
      );
      spyOn(component, 'getRentenInfo').and.callThrough();
      spyOn(component, 'submitForm').and.callThrough();
      spyOn(component, 'handleError').and.callThrough();
      //spyOn(component, 'handleSuccess').and.callThrough();
      //spyOn(rentenServiceServiceStub, 'getRente').and.callThrough();
      component.getRentenInfo();
      expect(component.getRentenInfo).toHaveBeenCalled();
      //expect(component.submitForm).toHaveBeenCalled();
      // expect(component.handleError).toHaveBeenCalled();
      //expect(component.handleSuccess).toHaveBeenCalled();

      expect(rentenServiceServiceStub.getRente).toHaveBeenCalled();
    });
  });*/
 
   
  it('should call login()', () =>  {
    spyOn(component, "login").and.callThrough();
    component.login();
    expect(component.login).toHaveBeenCalled();
  });

  it('should call logout()', () =>  {
    spyOn(component, "logout").and.callThrough();
    component.logout();
    expect(component.logout).toHaveBeenCalled();
  });

  it('should call changeEndpoint()', () =>  {
    spyOn(component, "changeEndpoint").and.callThrough();
    component.changeEndpoint(null,"newLabel");
    expect(component.changeEndpoint).toHaveBeenCalled();
    expect(component.chosenSupplier).toEqual("newLabel");
  });

});
