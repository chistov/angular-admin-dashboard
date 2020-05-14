import { ElementRef, ViewChild, Component, OnInit } from '@angular/core';
import { ModeService} from '../mode.service';
import { OpenMode} from '../models/types';
import {specialization} from 'assets/specialization.json';
import {publications} from 'assets/highlights.json';

@Component({
  selector: 'app-dashboard-mode',
  templateUrl: './dashboard-mode.component.html',
  styleUrls: ['./dashboard-mode.component.scss']
})

export class DashboardModeComponent implements OnInit {
  @ViewChild('alertTag', {read: ElementRef, static: false}) elRefContent: ElementRef;
  specialization = [];
  publications = [];

  constructor(public mode: ModeService) {
    this.specialization = specialization;
    this.publications = publications;
    setTimeout( () => this.elRefContent.nativeElement.remove(), 8000);
  }

  ngOnInit(): void {
  }

  getModes() { return OpenMode; }

  rmAlert() {
    this.elRefContent.nativeElement.remove();
  }

  stub($event) {
    $event.preventDefault();
  }

  addNew() {
    this.publications.push({});
  }
}
