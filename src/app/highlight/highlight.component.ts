import { Component, OnInit } from '@angular/core';
import { ModeService} from '../mode.service';
import { OpenMode} from '../models/types';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {

  isPublished = false;

  constructor(public mode: ModeService) {
  }

  getModes() { return OpenMode; }

  ngOnInit(): void {
  }

}
