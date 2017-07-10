import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {DepartmentComponent} from "../department/department.component";
import {EmployeeComponent} from "../employee/employee.component";
import {DepartmentDetailComponent} from "../department/department-detail/department-detail.component";
import {HomeComponent} from "../home/home.component";
import {PageNoFoundComponent} from "../page-no-found/page-no-found.component";

const routes:Routes = [
  // {path: '', component: HomeComponent},
  {path: '', redirectTo: '/department', pathMatch: 'full'},
  {path: 'department', component: DepartmentComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'department/:id', component: DepartmentDetailComponent},
  {path: '**', component: PageNoFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, PageNoFoundComponent, DepartmentComponent, EmployeeComponent, DepartmentDetailComponent]
})
export class AppRoutingModule {
}

