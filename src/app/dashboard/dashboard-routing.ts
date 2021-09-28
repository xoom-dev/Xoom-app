import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {EventsComponent} from './pages/events/events.component';
import {CreateEventComponent} from './pages/create-event/create-event.component';
import {CreateTicketComponent} from './pages/create-ticket/create-ticket.component';

const routes: Routes = [
  {path: 'dashboard', component: HomeComponent},
  {path: 'manage-events', component: EventsComponent},
  {path: 'create_event', component: CreateEventComponent},
  {path: 'create_ticket', redirectTo: 'create_ticket/', pathMatch: 'full'},
  {path: 'create_ticket/:eventId', component: CreateTicketComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
