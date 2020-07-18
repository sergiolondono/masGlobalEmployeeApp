import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any[];
  employee: any;

  constructor(public _employeeService: EmployeeService) {
    this.getEmployees();
    this.getEmployeeById('2');
   }

  ngOnInit() {
  }

  getEmployees() {
    this._employeeService.getEmployees().subscribe((resp: any) => {
      this.employees = resp;
      console.log(this.employees);
    });
  }

  getEmployeeById(id) {
    this._employeeService.getEmployeeById(id).subscribe((resp: any) => {
      this.employee = resp;
      console.log(this.employee);
    });
  }

}
