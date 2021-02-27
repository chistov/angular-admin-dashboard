import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HighlightComponent } from './highlight/highlight.component';
import { StatusTableComponent } from './status-table/status-table.component';
import { AppRoutingModule } from './app-routing.module';
import { EmitterService } from './common/emitter.service';
import { ContainerDirective } from './common/container.directive';
import { ProxyComponent } from './component/proxy.component';
import {DashboardModeComponent} from './dashboard-mode/dashboard-mode.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightComponent,
    StatusTableComponent,
    ContainerDirective,
    ProxyComponent,
    DashboardModeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [EmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
