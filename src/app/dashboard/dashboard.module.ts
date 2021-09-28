import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { EditEventComponent } from './pages/edit-event/edit-event.component';
import { GuestListComponent } from './pages/guest-list/guest-list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {DashboardRoutingModule} from './dashboard-routing';
import {FirebaseService} from '../services/firebase/firebase.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, HomeComponent, EventsComponent, CreateEventComponent, EditEventComponent, GuestListComponent, ProfileComponent, CreateTicketComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [],
  providers: [
    FirebaseService,
  ]
})
export class DashboardModule { }
