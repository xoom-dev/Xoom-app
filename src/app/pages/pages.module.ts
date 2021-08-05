import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
const route:Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home' },
  // {
  //   path: 'event-detail',
  //   component: EventDetailComponent,
  //   canActivate: [AuthGuard],
  // },

]

@NgModule({
  declarations: [LoginComponent, HomeComponent, EventDetailComponent],
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
