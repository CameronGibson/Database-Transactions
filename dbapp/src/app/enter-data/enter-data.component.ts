import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee';
import { EmployeeDataComponent } from '../employee-data/employee-data.component';
import { PostEmployeesService } from '../enter-data/post-employees.service';

@Component({
  selector: 'app-enter-data',
  templateUrl: './enter-data.component.html',
  styleUrls: ['./enter-data.component.css']
})
export class EnterDataComponent implements OnInit {

  public inputId: number = 0;
  public inputBadge: number = 0;
  public inputFirst: string = "";
  public inputLast: string = "";
  public inputAge: number = 0;
  public inputSalary: boolean = false;
  public submitEmployee: Employee;
  public autoIncrementedId: number;

  constructor(private postEmployeeService: PostEmployeesService,
              private employeeDataComponent: EmployeeDataComponent) { }

  ngOnInit(): void {
  }

  onSubmit(): void
  {
    this.submitEmployee = {
      "id": this.inputId = this.incrementId(), //<-- make sure to handle auto-incrementing primary key
      "badgeNum": this.inputBadge,
      "fName": this.inputFirst.toUpperCase(),
      "lName": this.inputLast.toUpperCase(),
      "age": this.inputAge,
      "isSalary": this.inputSalary
    }
    let temp: Employee[] = [];
    this.postEmployeeService.addEmployee(this.submitEmployee).subscribe(employee => temp.push(employee));
  }

  incrementId(): number
  {
    this.autoIncrementedId = this.employeeDataComponent.employees.length - 1;
    return this.autoIncrementedId;
  }
}
