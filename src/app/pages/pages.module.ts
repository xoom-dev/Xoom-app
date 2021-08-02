import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { EventDetailComponent } from './event-detail/event-detail.component';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { RegistrationComponent } from './registration/registration.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
const route:Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'ticket/:Id', component: TicketDetailsComponent },
  { path: '', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
  
  


]

@NgModule({
  declarations: [LoginComponent, HomeComponent, EventDetailComponent, RegistrationComponent, TicketDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule.forChild(route)
  ],
})
export class PagesModule { }
