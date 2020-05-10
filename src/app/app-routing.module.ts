import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModeComponent } from './dashboard-mode/dashboard-mode.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard-mode', pathMatch: 'full' },
  { path: 'dashboard-mode', component: DashboardModeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
