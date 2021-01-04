import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {NewreportComponent} from '../newreport/newreport.component';

const routes: Routes = [
  {path: '', component: DashboardComponent,
    children: [
      {path: 'new-report', component: NewreportComponent},
    ]}
] as Routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
