import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected.routing';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
