import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  url: string = "http://test-api-impl-spring.herokuapp.com/v2/RentenKalkulation";


  constructor(public fb: FormBuilder,  private http: HttpClient) {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.form = this.fb.group({
      artderVersicherung: [''],
      datumderStandmitteilung: [date],
      versicherungsbeginn:[],
      datumRentenbeginn: [],
      aktuelleBeitragszahlungen: [0],
      aktuellesVorsorgevermögen: [0],
      garantiezins: [0],
      ausgewiesenederzeitigenÜberschussbeteiligung: [0],
      derzeitigeGesamtverzinsung: [0],
      höhedergarantiertenAltersrente: [0],
      höhederAltersrentebeiderzeitigenÜberschussbeteiligungen: [0],
      höhedergarantiertenAltersrentebeiFortzahlungderderzeitigenBeiträge: [0],
      höhederAltersrentebeiderzeitigenÜberschussbeteiligungenbeiFortzahlungderderzeitigenBeiträge: [0],
      fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginn: [0],
      fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginnbeiFortzahlungderderzeitigenBeiträge: [0],
      hochrechnungdesgarantiertenAltersvorsorgevermögens: [0],
      hochrechnungdesAltergarantierterRentenfaktorjeZehnTausendEuroVorsorgeguthabensvorsorgevermögens:[0],
      hochrechnungdesAltersvorsorgevermögens: [0],
      rentenfaktor: [0],
      aktuellerRentenfaktorjeZehnTausendEuroVorsorgeguthaben: [0],
      garantierterRentenfaktorjeZehnTausendEuroVorsorgeguthaben: [0],
      aktuellejährlichgezahlteZulagen: [0],
      grundzulagen: false,
      anzahlderKinderdieberücksichtigtwerden:[0],
      zulagen: {
        grundzulagen: false,
        Kinderzulagen: {anzahlderKinderdieberücksichtigtwerden: [0]}
      },
      anzahlderKinder:[0],
      geburtsDatumDerKinder:[],
      kinder: {
        anzahlderKinder:[0],
        geburtsDatumDerKinder:[]
      }
    })
  }
  ngOnInit() {

  }

  submitForm() {
    var formData: any = new FormData();

    formData.append("artderVersicherung", this.form.get('artderVersicherung').value);
    formData.append("datumderStandmitteilung", this.form.get('datumderStandmitteilung').value);
    formData.append("versicherungsbeginn", this.form.get('versicherungsbeginn').value);
    formData.append("datumRentenbeginn", this.form.get('datumRentenbeginn').value);
    formData.append("aktuelleBeitragszahlungen", this.form.get('aktuelleBeitragszahlungen').value);
    formData.append("aktuellesVorsorgevermögen", this.form.get('aktuellesVorsorgevermögen').value);
    formData.append("garantiezins", this.form.get('garantiezins').value);
    formData.append("ausgewiesenederzeitigenÜberschussbeteiligung", this.form.get('ausgewiesenederzeitigenÜberschussbeteiligung').value);
    formData.append("derzeitigeGesamtverzinsung", this.form.get('derzeitigeGesamtverzinsung').value);
    formData.append("höhedergarantiertenAltersrente", this.form.get('höhedergarantiertenAltersrente').value);
    formData.append("höhederAltersrentebeiderzeitigenÜberschussbeteiligungen", this.form.get('höhederAltersrentebeiderzeitigenÜberschussbeteiligungen').value);
    formData.append("höhedergarantiertenAltersrentebeiFortzahlungderderzeitigenBeiträge", this.form.get('höhedergarantiertenAltersrentebeiFortzahlungderderzeitigenBeiträge').value);
    formData.append("fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginn", this.form.get('fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginn').value);
    formData.append("fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginnbeiFortzahlungderderzeitigenBeiträge", this.form.get('fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginnbeiFortzahlungderderzeitigenBeiträge').value);
    formData.append("hochrechnungdesgarantiertenAltersvorsorgevermögens", this.form.get('hochrechnungdesgarantiertenAltersvorsorgevermögens').value);
    formData.append("hochrechnungdesAltersvorsorgevermögens", this.form.get('hochrechnungdesAltersvorsorgevermögens').value);
    formData.append("rentenfaktor", this.form.get('rentenfaktor').value);
    formData.append("aktuellerRentenfaktorjeZehnTausendEuroVorsorgeguthaben", this.form.get('aktuellerRentenfaktorjeZehnTausendEuroVorsorgeguthaben').value);
    formData.append("garantierterRentenfaktorjeZehnTausendEuroVorsorgeguthaben", this.form.get('hochrechnungdesAltergarantierterRentenfaktorjeZehnTausendEuroVorsorgeguthabensvorsorgevermögens').value);
    formData.append("aktuellejährlichgezahlteZulagen", this.form.get('aktuellejährlichgezahlteZulagen').value);
    formData.append("zulagen",(
      formData.append("grundzulagen", this.form.get('grundzulagen').value),
      formData.append("kinderzulagen", (formData.append("anzahlderKinderdieberücksichtigtwerden", this.form.get('anzahlderKinderdieberücksichtigtwerden').value)))
      )
    );
    formData.append("kinder",(
    formData.append("anzahlderKinder", this.form.get('anzahlderKinder').value),
    formData.append("geburtsDatumDerKinder",this.form.get('geburtsDatumDerKinder').value)));
    for (let value of formData.entries()) {
    console.log(value[0] + ": " + value[1]);
    }
    return formData;
  }
}
