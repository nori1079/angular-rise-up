import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  },

  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(mod => mod.WelcomeModule),
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then(mod => mod.CreateModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
