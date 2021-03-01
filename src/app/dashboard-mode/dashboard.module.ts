import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule} from './dashboard-routing.module';


import { ProxyComponent } from '../component/proxy.component';
import { DashboardModeComponent } from './dashboard-mode.component';
import { ContainerDirective } from '../dynamic-component-utils/container.directive';



import { EmitterService } from '../dynamic-component-utils/emitter.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardModeComponent,
    ProxyComponent,
    ContainerDirective
  ],
  providers: [EmitterService],
})
export class DashboardModule { }
