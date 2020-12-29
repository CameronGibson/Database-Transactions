import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee';
import { GetEmployeesService } from '../employee-data/get-employees.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit
{

  public employees: Employee[];
  public employee: Employee;
  public idNumber: number;

  constructor( private getEmployeeService: GetEmployeesService ) { }
  
  ngOnInit(): void
  {
    this.showEmployees();
  }
  
  showEmployees(): void {
    this.getEmployeeService.getEmployees().subscribe( employee => this.employees = employee)
  }

  deleteEmployees(): void
  {
    this.getEmployeeService.deleteEmployee(this.idNumber).subscribe();
  }

  employeeRemoval(id: number)
  {
    this.idNumber = id;
    this.deleteEmployees();
    location.reload();
  }
}
