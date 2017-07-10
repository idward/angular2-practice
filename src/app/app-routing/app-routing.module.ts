import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DepartmentComponent} from "../department/department.component";
import {EmployeeComponent} from "../employee/employee.component";
import {DepartmentDetailComponent} from "../department/department-detail/department-detail.component";

const routes:Routes = [
  {path: 'department', component: DepartmentComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'department/:id', component: DepartmentDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: [DepartmentComponent,EmployeeComponent,DepartmentDetailComponent]
})
export class AppRoutingModule { }

