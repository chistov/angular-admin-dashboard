import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardModeComponent } from './dashboard-mode/dashboard-mode.component';
import { HighlightComponent } from './highlight/highlight.component';
import { StatusTableComponent } from './status-table/status-table.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardModeComponent,
    HighlightComponent,
    StatusTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
