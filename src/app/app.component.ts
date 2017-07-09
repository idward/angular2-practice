import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // color:string = 'blue';
  // one:boolean = true;
  // two:boolean = true;

  myForm:FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        postalCode: new FormControl()
      })
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
