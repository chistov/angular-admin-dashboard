import { Component } from '@angular/core';
import { OpenMode } from './models/types';
import { ModeService } from './mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Natera test project';
  getModes() { return OpenMode; }

  constructor(private modeServ: ModeService) {
  }

  setMode($event, _mode) { $event.preventDefault(); this.modeServ.setMode(_mode); }
}
