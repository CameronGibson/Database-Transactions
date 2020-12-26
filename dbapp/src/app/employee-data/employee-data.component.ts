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
  
  public mockEmployees: Employee[] = [
    { "id": 0, "badgeNum": 55378, "fName": "Cameron", "lName": "Gibson", "age": 29, "isSalary": true },
    { "id": 1, "badgeNum": 62742, "fName": "Shane", "lName": "Gibson", "age": 31, "isSalary": false },
    { "id": 2, "badgeNum": 15334, "fName": "Sam", "lName": "Gregg", "age": 24, "isSalary": false },
    { "id": 3, "badgeNum": 77331, "fName": "Cory", "lName": "Gibson", "age": 62, "isSalary": false }
  ];
  public employees: Employee[];

  constructor( private employeeService: GetEmployeesService) { }
  
  ngOnInit(): void
  {
    this.showEmployees();
  }
  
  showEmployees(): void {
    this.employeeService.getEmployees().subscribe( employee => this.employees = employee)
  }

  buildEmployee(): void
  {
    
  }
}
