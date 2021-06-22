import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ExternalApiComponent } from './external-api/external-api.component';
import { AuthGuard } from '@auth0/auth0-angular';
const route:Routes = [
  { path: 'login', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuard],
  },


]

@NgModule({
  declarations: [LoginComponent, HomeComponent, ExternalApiComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ],
})
export class PagesModule { }
