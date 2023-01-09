import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  nameField = new FormControl('soy un controlador');

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(console.log)
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

}
