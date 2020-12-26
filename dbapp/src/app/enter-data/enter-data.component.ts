import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void
  {
    this.submitEmployee = {
      "id": this.inputId,
      "badgeNum": this.inputBadge,
      "fName": this.inputFirst.toUpperCase(),
      "lName": this.inputLast.toUpperCase(),
      "age": this.inputAge,
      "isSalary": this.inputSalary
    }
    console.log(this.submitEmployee);
    //add logic to send a POST request via Http,
    //build out REST api to handle POST requests.
  }

}
