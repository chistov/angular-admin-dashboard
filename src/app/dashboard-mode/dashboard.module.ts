import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule} from './dashboard-routing.module';
import { CommonLayoutComponent } from '../common-components/common-layout/common-layout.component';
import { HeaderComponent } from '../common-components/header/header.component';
import { AsideComponent } from '../common-components/aside/aside.component';


import { LoaderComponent } from '../dynamic-component-utils/loader.component';
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
    LoaderComponent,
    ContainerDirective,
    CommonLayoutComponent,
    HeaderComponent,
    AsideComponent
  ],
  providers: [EmitterService],
})
export class DashboardModule { }
