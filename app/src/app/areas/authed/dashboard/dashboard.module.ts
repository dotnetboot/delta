import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ComponentsModule } from '../../../components/components.module';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routes';

@NgModule({
  declarations: [
      DashboardPageComponent
  ],
  exports: [
      DashboardPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,

    DashboardRoutingModule
  ],
  providers: [],
})
export class DashboardAreaModule { }
