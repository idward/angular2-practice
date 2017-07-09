import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // color:string = 'blue';
  // one:boolean = true;
  // two:boolean = true;

  onSubmit(value:any) {
      console.log(value);
  }
}
