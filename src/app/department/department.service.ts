import { Injectable } from '@angular/core';
import {DEPARTMENTS} from "./department.data";

@Injectable()
export class DepartmentService {

  constructor() { }

  getDepartments(){
    return DEPARTMENTS;
  }

}
