import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // color:string = 'blue';
  // one:boolean = true;
  // two:boolean = true;

  myForm:FormGroup;

  constructor(private _formBuilder:FormBuilder) {
    // this.myForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   email: new FormControl(),
    //   address: new FormGroup({
    //     street: new FormControl(),
    //     city: new FormControl(),
    //     postalCode: new FormControl()
    //   })
    // });
  }

  ngOnInit():any {
    this.myForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: [],
      address: this._formBuilder.group({
        street: [],
        city: [],
        postalCode: []
      })
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    let data = this.myForm.value;
    let key = btoa(btoa(data.name) + '??' + btoa(data.email));
    console.log(key);
  }

}
