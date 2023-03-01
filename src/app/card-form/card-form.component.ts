import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl<any>('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5),
    ]),
  });

  constructor() {
    console.log(this.cardForm.controls.name);
  }
}
