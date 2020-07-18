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
  employeeFound: boolean = false;

  constructor(public _employeeService: EmployeeService) {
   }

  ngOnInit() {
    this.getEmployees();  
  }

  getEmployees() {
    this._employeeService.getEmployees().subscribe((resp: any) => {
      this.employees = resp;
    });
  }

  getEmployeeById(user) {
    this._employeeService.getEmployeeById(user.userId).subscribe((resp: any) => {
      if(resp.id !== undefined)
      {
        this.employee = resp;  
        this.employees = [];
        this.employeeFound = true;
      } else {        
        this.getEmployees();  
        this.employeeFound = false;
      }
        console.log(this.employeeFound);
    });
  }

}
