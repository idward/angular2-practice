import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {
  departmentId:string;

  constructor(private _route:ActivatedRoute, private _router:Router) {
  }

  ngOnInit() {
    //this.departmentId = this._route.snapshot.params['id'];
    console.log(this._route.params instanceof Observable);
    this._route.params.subscribe(
      (params:Params) => this.departmentId = params['id']
    );
  }

  goPrev() {
    let deptId = parseInt(this.departmentId);
    // this._router.navigate(['/department', deptId - 1]);
    this._router.navigate(['../', deptId - 1], {relativeTo: this._route});
  }

  goNext() {
    let deptId = parseInt(this.departmentId);
    // this._router.navigate(['/department', deptId + 1]);
    this._router.navigate(['../', deptId + 1], {relativeTo: this._route});
  }

}
