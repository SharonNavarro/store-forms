import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidators } from 'src/app/utils/validators';

import { AuthService } from './../../../core/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.createUser(value.email, value.password)
      .then(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), MyValidators.validPassword]],
      confirmPassword: ['', [Validators.required]],
      type: ['company', [Validators.required]],
      comapnyName: ['']
    }, {
      validators: MyValidators.matchPasswords
    });

    this.typeField.valueChanges.subscribe((value) => {
      console.log(value);
      if(value === 'company') {
        this.companyField.setValidators([Validators.required]);
      } else {
        this.companyField.setValidators(null);
      }
      this.companyField.updateValueAndValidity();
    })
  }

  get typeField() {
    return this.form.get('type');
  }

  get companyField() {
    return this.form.get('companyName');
  }

}
