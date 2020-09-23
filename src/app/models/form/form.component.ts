import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RentenServiceService } from 'src/app/services/renten-service.service'
import { FormModel } from './form-Model';
import {style, state, animate, transition, trigger, AnimationTriggerMetadata} from '@angular/animations';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    {provide: RentenServiceService, useClass: RentenServiceService},
    {provide: FormModel, useClass: FormModel}
  ],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0}))
      ])
    ])
  ]
})

export class FormComponent implements OnInit {
  form: FormGroup;
  formData: FormData;
  public rentenResponse: any;
  public waehrung;
  public chosenSupplier = "Anbieter";


  constructor(public formModel: FormModel, public rentenService: RentenServiceService) {
    this.formModel = new FormModel();
    this.rentenResponse = null;
    this.formData = new FormData();
    this.form = new FormGroup(
    ({
      artderVersicherung: new FormControl(),
      datumderStandmitteilung: new FormControl(),
      versicherungsbeginn: new FormControl(),
      datumRentenbeginn: new FormControl(),
      aktuelleBeitragszahlungen: new FormControl(),
      aktuellesVorsorgevermögen: new FormControl(),
      garantiezins: new FormControl(),
      ausgewiesenederzeitigenÜberschussbeteiligung: new FormControl(),
      derzeitigeGesamtverzinsung: new FormControl(),
      höhedergarantiertenAltersrente: new FormControl(),
      höhederAltersrentebeiderzeitigenÜberschussbeteiligungen: new FormControl(),
      höhedergarantiertenAltersrentebeiFortzahlungderderzeitigenBeiträge: new FormControl(),
      höhederAltersrentebeiderzeitigenÜberschussbeteiligungenbeiFortzahlungderderzeitigenBeiträge: new FormControl(),
      fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginn: new FormControl(),
      fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginnbeiFortzahlungderderzeitigenBeiträge: new FormControl(),
      hochrechnungdesgarantiertenAltersvorsorgevermögens: new FormControl(),
      hochrechnungdesAltersvorsorgevermögens: new FormControl(),
      rentenfaktor : new FormControl(),
      aktuellerRentenfaktorjeZehnTausendEuroVorsorgeguthaben: new FormControl(),
      garantierterRentenfaktorjeZehnTausendEuroVorsorgeguthaben: new FormControl(),
      aktuellejährlichgezahlteZulagen: new FormControl(),
      zulagen: new FormControl(),
      grundzulagen: new FormControl(),
      kinderzulagen: new FormControl(),
      anzahlderKinderdieberücksichtigtwerden: new FormControl(),
      kinder:new FormControl(),
      anzahlderKinder: new FormControl(),
      geburtsDatumDerKinder: new FormControl(),
    }));

    this.formModel.artderVersicherung = null;
    this.formModel.versicherungsbeginn = null;
    this.formModel.datumderStandmitteilung = null;
    this.formModel.datumRentenbeginn = null;
    this.formModel.aktuelleBeitragszahlungen = null;
    this.formModel.aktuellesVorsorgevermögen = null;
    this.formModel.garantiezins = null;
    this.formModel.ausgewiesenederzeitigenÜberschussbeteiligung = null;
    this.formModel.derzeitigeGesamtverzinsung = null;
    this.formModel.höhedergarantiertenAltersrente = null;
    this.formModel.höhederAltersrentebeiderzeitigenÜberschussbeteiligungen = null;
    this.formModel.höhedergarantiertenAltersrentebeiFortzahlungderderzeitigenBeiträge = null;
    this.formModel.fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginn = null;
    this.formModel.fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginnbeiFortzahlungderderzeitigenBeiträge = null;
    this.formModel.hochrechnungdesgarantiertenAltersvorsorgevermögens = null;
    this.formModel.hochrechnungdesAltersvorsorgevermögens = null;
    this.formModel.rentenfaktor = null;
    this.formModel.aktuellerRentenfaktorjeZehnTausendEuroVorsorgeguthaben = null;
    this.formModel.garantierterRentenfaktorjeZehnTausendEuroVorsorgeguthaben = null;
    this.formModel.aktuellejährlichgezahlteZulagen = null;
    this.formModel.zulagen = {grundzulagen: false,
      kinderzulagen: { anzahlderKinderdieberücksichtigtwerden:null}
    };
    this.formModel.kinder= {anzahlderKinder: null, geburtsDatumDerKinder: null};

  }
  ngOnInit() {

  }

  submitForm() {
    this.formModel.artderVersicherung = this.form.get('artderVersicherung').value;
    this.formModel.datumderStandmitteilung =this.form.get('datumderStandmitteilung').value;
    this.formModel.versicherungsbeginn = this.form.get('versicherungsbeginn').value;
    this.formModel.datumRentenbeginn = this.form.get('datumRentenbeginn').value;
    this.formModel.aktuelleBeitragszahlungen =this.form.get('aktuelleBeitragszahlungen').value;
    this.formModel.aktuellesVorsorgevermögen =this.form.get('aktuellesVorsorgevermögen').value;
    this.formModel.garantiezins =this.form.get('garantiezins').value;
    this.formModel.ausgewiesenederzeitigenÜberschussbeteiligung =this.form.get('ausgewiesenederzeitigenÜberschussbeteiligung').value;
    this.formModel.derzeitigeGesamtverzinsung =this.form.get('derzeitigeGesamtverzinsung').value;
    this.formModel.höhedergarantiertenAltersrente =this.form.get('höhedergarantiertenAltersrente').value;
    this.formModel.höhederAltersrentebeiderzeitigenÜberschussbeteiligungen =this.form.get('höhederAltersrentebeiderzeitigenÜberschussbeteiligungen').value;
    this.formModel.höhedergarantiertenAltersrentebeiFortzahlungderderzeitigenBeiträge =this.form.get('höhedergarantiertenAltersrentebeiFortzahlungderderzeitigenBeiträge').value;
    this.formModel.fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginn =this.form.get('fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginn').value;
    this.formModel.fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginnbeiFortzahlungderderzeitigenBeiträge =this.form.get('fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginnbeiFortzahlungderderzeitigenBeiträge').value;
    this.formModel.hochrechnungdesgarantiertenAltersvorsorgevermögens =this.form.get('hochrechnungdesgarantiertenAltersvorsorgevermögens').value;
    this.formModel.hochrechnungdesAltersvorsorgevermögens =this.form.get('hochrechnungdesAltersvorsorgevermögens').value;
    this.formModel.rentenfaktor =this.form.get('rentenfaktor').value;
    this.formModel.aktuellerRentenfaktorjeZehnTausendEuroVorsorgeguthaben =this.form.get('aktuellerRentenfaktorjeZehnTausendEuroVorsorgeguthaben').value;
    this.formModel.garantierterRentenfaktorjeZehnTausendEuroVorsorgeguthaben =this.form.get('garantierterRentenfaktorjeZehnTausendEuroVorsorgeguthaben').value;
    this.formModel.aktuellejährlichgezahlteZulagen =this.form.get('aktuellejährlichgezahlteZulagen').value;
    this.formModel.zulagen.grundzulagen =  this.form.get('grundzulagen').value;
    this.formModel.zulagen.kinderzulagen.anzahlderKinderdieberücksichtigtwerden =  this.form.get('anzahlderKinderdieberücksichtigtwerden').value;
    this.formModel.kinder.anzahlderKinder =  this.form.get('anzahlderKinder').value;
    this.formModel.kinder.geburtsDatumDerKinder = this.form.get('geburtsDatumDerKinder').value;
    return this.formModel;
  }
  changecheckBox(){
    this.formModel.zulagen.grundzulagen = this.form.get('grundzulagen').value;
  }
  getRentenInfo()
  {
    this.rentenService.getRente(this.submitForm()).subscribe((res) => {
    this.rentenResponse = res;
    this.waehrung = this.rentenResponse.summe.währung;
    });
  }
  
  changeChosenSupplier(supplier:string)
  {
    this.chosenSupplier = supplier;
  }

}
