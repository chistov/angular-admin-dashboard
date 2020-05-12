import { Component, OnInit } from '@angular/core';
import {stat} from 'assets/table-data.json';
import { ModeService} from '../mode.service';
import { OpenMode} from '../models/types';

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit {
  statTable = [];

  constructor(public mode: ModeService) {
    this.statTable = stat;
  }

  getModes() { return OpenMode; }

  ngOnInit(): void {
  }

  rmRow($event, item: any) {
    $event.preventDefault();
    this.statTable = this.statTable.filter(it => it.project !== item.project);
  }
}
