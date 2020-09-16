import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form = new FormControl('');
  Geldbetrag: {
    betrag:	number,
    währung: string;
  };
  constructor() {
  }
  ngOnInit() {

  }
  sendData() {
    this.form.setValue(this.Geldbetrag);
    this.form.setValue(213);
  }
}
