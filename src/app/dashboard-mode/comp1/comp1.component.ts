import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('this_1: ', this);
  }

  ngOnDestroy(): void {
    console.log('comp1 destroyed');
  }

}
