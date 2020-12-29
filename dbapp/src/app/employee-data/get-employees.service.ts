import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from 'src/models/employee';

@Injectable({
  providedIn: 'root'
})

export class GetEmployeesService {
  
  getEmpUrl = "http://localhost:61303/api/employee";

  constructor(private http: HttpClient) { }

  //GET
  getEmployees(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.getEmpUrl);
  }

  //DELETE
  deleteEmployee(id: number): Observable<Employee>
  {
    const deleteEmpUrl = 'http://localhost:61303/api/employee/' + id;
    return this.http.delete<Employee>(deleteEmpUrl);
  }
}
