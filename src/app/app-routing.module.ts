import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GestGuard } from './guards/gest.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },

  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(mod => mod.WelcomeModule),
    canLoad: [GestGuard],
    canActivate: [GestGuard]
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then(mod => mod.CreateModule), canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
