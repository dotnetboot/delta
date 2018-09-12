import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthedComponent } from './areas/authed/authed.component';

const routes: Routes = [
  // Authenticated user routes - this structure is required in order to show a
  // top bar and a sidebar ONLY for authenticated users. We don't particularly
  // want to show those on the login page!
  {
    path: '',
    component: AuthedComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './areas/authed/dashboard/dashboard.module#DashboardAreaModule'
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      },
    ]
  },


  // Login routes - Login has its own routes and its own top level component.
  {
    path: 'login',
    loadChildren: './areas/login/login-area.module#LoginAreaModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
