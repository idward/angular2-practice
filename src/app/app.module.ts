import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
// import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'department', component: DepartmentComponent},
      {path: 'employee', component: EmployeeComponent}
    ])
    //CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
