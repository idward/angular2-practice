import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {
  departmentId:string;

  constructor(private _route:ActivatedRoute) {
  }

  ngOnInit() {
    this.departmentId = this._route.snapshot.params['id'];
  }

}
