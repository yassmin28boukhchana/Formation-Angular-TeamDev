import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './private/Components/departement/departement.component';
import { DetailsDepartmentComponent } from './private/Components/details-department/details-department.component';
import { UserComponent } from './private/Components/user/user.component';
import { DetailsUserComponent } from './private/Components/details-user/details-user.component';

const routes: Routes = [
  {
    path:'department',
    component:DepartementComponent,
  },
  {
    path:'department/:id',
    component:DetailsDepartmentComponent,
  },
  {
    path:'user',
    component:UserComponent,
  },
  {
    path:'user/:id',
    component:DetailsUserComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
