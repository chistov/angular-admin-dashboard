import { Component, OnInit } from '@angular/core';
import {Content} from '../models/content';
import {EmitterService} from '../dynamic-component-utils/emitter.service';

@Component({
  selector: 'app-dashboard-mode',
  templateUrl: './dashboard-mode.component.html',
  styleUrls: ['./dashboard-mode.component.scss']
})

export class DashboardModeComponent implements OnInit {
  currComponents: Content[];

  constructor(emitter: EmitterService) {
    console.log('DashboardModeComponent works');
    this.currComponents = emitter.getComponents();
  }

  ngOnInit(): void {
  }
}
