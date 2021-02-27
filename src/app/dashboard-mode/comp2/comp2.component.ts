import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log('comp2 destroyed');
  }
}
