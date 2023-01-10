import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  // INPUTS
  nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#000000');
  dateField = new FormControl('');
  monthField = new FormControl('');
  ageField = new FormControl(12);
  passwordField = new FormControl('');
  priceField = new FormControl('50');
  weekField = new FormControl('');
  timefield = new FormControl('');
  searchField = new FormControl('');
  descriptionField = new FormControl('');

  // SELECTS
  categoryField = new FormControl('category-2');
  tagField = new FormControl()

  // INPUT RADIO AND CHECKBOX
  agreeField = new FormControl(false);
  genderField = new FormControl('');
  zoneField = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(console.log)
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  get isNameFieldValid() {{
    return this.nameField.touched && this.nameField.valid;
  }}

  get isNameFieldInvalid() {{
    return this.nameField.touched && this.nameField.invalid;
  }}



}
