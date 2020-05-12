import { Injectable } from '@angular/core';
import { OpenMode} from './models/types';

@Injectable({
  providedIn: 'root'
})

export class ModeService {
  mode = OpenMode.View;
  constructor() {}

  getMode() { return this.mode; }
  setMode(_mode) { this.mode = _mode; }
}
