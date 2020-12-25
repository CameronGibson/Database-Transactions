import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyError } from 'rxjs';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EnterDataComponent } from './enter-data/enter-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';

const routes: Routes = [
  {path: 'app-employee-data', component: EmployeeDataComponent},
  {path: 'app-enter-data', component: EnterDataComponent},
  {path: 'app-delete-data', component: DeleteDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
