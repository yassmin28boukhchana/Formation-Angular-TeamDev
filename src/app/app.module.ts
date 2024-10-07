import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule } from '@angular/common/http';
import { DepartementComponent } from './private/Components/departement/departement.component'
import { FormsModule } from '@angular/forms';
import { DetailsDepartmentComponent } from './private/Components/details-department/details-department.component';
import { NavbarComponent } from './private/shared/navbar/navbar.component';
import { UserComponent } from './private/Components/user/user.component';
import { DetailsUserComponent } from './private/Components/details-user/details-user.component'
import { ReactiveFormsModule } from '@angular/forms';  // taaml validation lel les champs w ahna n3abo fihom
@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,DetailsDepartmentComponent, NavbarComponent, UserComponent, DetailsUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // pour utiliser les requetes http
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
