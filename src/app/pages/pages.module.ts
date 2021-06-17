import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { 
  AuthGuardService as AuthGuard 
} from '../providers/auth-guard.service';
const route:Routes = [
  { path: 'login', component : LoginComponent},
  { path: 'home', component: HomeComponent, canActivate : [AuthGuard] },
  // { path: '', component : LoginComponent },

]

@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ],
})
export class PagesModule { }
