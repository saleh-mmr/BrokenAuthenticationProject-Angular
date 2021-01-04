import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {NewreportComponent} from '../newreport/newreport.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    DashboardComponent,
    NewreportComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
  ]
})
export class ProfileModule { }
