import {Component, OnInit} from '@angular/core';
import {Department} from "./department.model";
import {DepartmentService} from "./department.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  providers: [DepartmentService]
})
export class DepartmentComponent implements OnInit {
  departments:Department[];

  constructor(private _departmentService:DepartmentService,private _router:Router) {
  }

  ngOnInit() {
    this.departments = this._departmentService.getDepartments();
  }

  onSelect(department:Department) {
    this._router.navigate(['/department', department.deptId]);
  }

}
