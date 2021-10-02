import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {EventsComponent} from './pages/events/events.component';
import {CreateEventComponent} from './pages/create-event/create-event.component';
import {CreateTicketComponent} from './pages/create-ticket/create-ticket.component';
import {EditEventComponent} from './pages/edit-event/edit-event.component';
import {TransactionsComponent} from './pages/transactions/transactions.component';
import {WithdrawalComponent} from './pages/withdrawal/withdrawal.component';

const routes: Routes = [
  {path: 'dashboard', component: HomeComponent},
  {path: 'manage-events', component: EventsComponent},
  {path: 'create_event', component: CreateEventComponent},
  {path: 'create_ticket', redirectTo: 'create_ticket/', pathMatch: 'full'},
  {path: 'create_ticket/:eventId', component: CreateTicketComponent},
  {path: 'edit_event/:eventId', component: EditEventComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'withdrawal', component: WithdrawalComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
