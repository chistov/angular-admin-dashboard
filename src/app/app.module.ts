import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardModeComponent } from './dashboard-mode/dashboard-mode.component';
import { EditModeComponent } from './edit-mode/edit-mode.component';
import { HighlightComponent } from './highlight/highlight.component';
import { StatusTableComponent } from './status-table/status-table.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardModeComponent,
    EditModeComponent,
    HighlightComponent,
    StatusTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
