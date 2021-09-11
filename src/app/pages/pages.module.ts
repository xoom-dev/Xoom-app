import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { EventDetailComponent } from './event-detail/event-detail.component';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { TicketsComponent } from './tickets/tickets.component';
import { MatDialogModule } from '@angular/material/dialog';
const route:Routes = [
  { path: 'login', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'ticket', component: TicketsComponent },
  { path: '', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
  // {
  //   path: 'event-detail',
  //   component: EventDetailComponent,
  //   canActivate: [AuthGuard],
  // },


]

@NgModule({
  declarations: [LoginComponent, HomeComponent, EventDetailComponent, TicketsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatDialogModule,
    RouterModule.forChild(route)
  ],
})
export class PagesModule { }
