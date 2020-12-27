import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee';
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

  constructor(private postEmployeeService: PostEmployeesService) { }

  ngOnInit(): void {
  }

  onSubmit(): void
  {
    this.submitEmployee = {
      "id": this.inputId = 8, //<-- make sure to handle auto-incrementing primary key
      "badgeNum": this.inputBadge,
      "fName": this.inputFirst.toUpperCase(),
      "lName": this.inputLast.toUpperCase(),
      "age": this.inputAge,
      "isSalary": this.inputSalary
    }
    let temp: Employee[] = [];
    this.postEmployeeService.addEmployee(this.submitEmployee).subscribe(employee => temp.push(employee));
  }
}
