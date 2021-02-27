import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule} from './dashboard-routing.module';


import { ProxyComponent } from '../component/proxy.component';
import { DashboardModeComponent } from './dashboard-mode.component';
import { ContainerDirective } from '../common/container.directive';



import { EmitterService } from '../common/emitter.service';

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
