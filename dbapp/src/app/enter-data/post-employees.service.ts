import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from 'src/models/employee';

@Injectable({
  providedIn: 'root'
})
  
export class PostEmployeesService {

  postEmpUrl = "http://localhost:61303/api/employee/";

  constructor(private http: HttpClient) { }

  addEmployee(employee: Employee)
  {
    return this.http.post<Employee>(this.postEmpUrl, employee);
  }
}

//implement error handling