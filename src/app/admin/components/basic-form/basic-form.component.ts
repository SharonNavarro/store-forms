import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(console.log);
    this.form.valueChanges.subscribe(value => {
      console.log(value)
    })
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  get nameField() {
    return this.form.get('name');
  }

  get isNameFieldValid() {
    {
      return this.nameField.touched && this.nameField.valid;
    }
  }

  get isNameFieldInvalid() {
    {
      return this.nameField.touched && this.nameField.invalid;
    }
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get ageField() {
    return this.form.get('age');
  }

  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }

  get monthField() {
    return this.form.get('month');
  }

  get passwordField() {
    return this.form.get('password');
  }

  get priceField() {
    return this.form.get('price');
  }

  get weekField() {
    return this.form.get('week');
  }

  get timeField() {
    return this.form.get('time');
  }

  get searchField() {
    return this.form.get('search');
  }

  get descriptionField() {
    return this.form.get('description');
  }

  save(event) {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched;
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: [''],
      phone: ['', Validators.required],
      color: ['#000000'],
      date: [''],
      month:[''],
      age: [12],
      password: [''],
      price: ['50'],
      week: [''],
      time: [''],
      search: [''],
      description: [''],
      category: ['category-2'],
      tag: [],
      agree: [false],
      gender: [''],
      zone: ['']
    });
  }

}
