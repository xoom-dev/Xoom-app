import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
<<<<<<< HEAD
  imports: [RouterModule.forRoot(routes ,{ useHash: true, relativeLinkResolution: 'legacy' })],
=======
  imports: [RouterModule.forRoot(routes , {useHash: true})],
>>>>>>> 52f51f8e987667bc0fb8f02abdeef5b46f18531d
  exports: [RouterModule]
})

export class AppRoutingModule { }
