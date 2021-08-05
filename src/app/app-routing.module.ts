import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
