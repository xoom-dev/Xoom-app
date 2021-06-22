import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { 
  AuthGuardService as AuthGuard 
} from './providers/auth-guard.service';

const routes: Routes = [
  // { path: 'home', component: AppComponent, canActivate : [AuthGuard] },
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  // { path: '**', redirectTo: 'home' },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
