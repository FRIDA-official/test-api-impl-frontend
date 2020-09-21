
export class FormModel{

  artderVersicherung: string;
  datumderStandmitteilung: Date;
  versicherungsbeginn: Date;
  datumRentenbeginn: Date;
  aktuelleBeitragszahlungen: number;
  aktuellesVorsorgevermögen: number;
  garantiezins: number;
  ausgewiesenederzeitigenÜberschussbeteiligung: number;
  derzeitigeGesamtverzinsung:number;
  höhedergarantiertenAltersrente: number;
  höhederAltersrentebeiderzeitigenÜberschussbeteiligungen: number;
  höhedergarantiertenAltersrentebeiFortzahlungderderzeitigenBeiträge: number;
  höhederAltersrentebeiderzeitigenÜberschussbeteiligungenbeiFortzahlungderderzeitigenBeiträge: number;
  fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginn: number;
  fondskapitalbeiFondswachstumvonXProzentbeiRentenbeginnbeiFortzahlungderderzeitigenBeiträge:number;
  hochrechnungdesgarantiertenAltersvorsorgevermögens: number;
  hochrechnungdesAltersvorsorgevermögens: number;
  rentenfaktor : number;
  aktuellerRentenfaktorjeZehnTausendEuroVorsorgeguthaben: number;
  garantierterRentenfaktorjeZehnTausendEuroVorsorgeguthaben:number;
  aktuellejährlichgezahlteZulagen: number;

  zulagen: {
    grundzulagen: boolean,
    kinderzulagen:{
      anzahlderKinderdieberücksichtigtwerden: number;
    }
  };

  kinder: {
    anzahlderKinder: number;
    geburtsDatumDerKinder: Date;
  }

}
