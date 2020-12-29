import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyError } from 'rxjs';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EnterDataComponent } from './enter-data/enter-data.component';

const routes: Routes = [
  {path: 'app-employee-data', component: EmployeeDataComponent},
  {path: 'app-enter-data', component: EnterDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
