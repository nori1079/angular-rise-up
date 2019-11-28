import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [HomeComponent, ActionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatProgressBarModule
  ]
})
export class HomeModule { }
