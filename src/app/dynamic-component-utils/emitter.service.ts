import { Injectable } from '@angular/core';
import { Content} from '../models/content';

import { Comp1Component} from '../dashboard-mode/comp1/comp1.component';
import { Comp2Component} from '../dashboard-mode/comp2/comp2.component';

@Injectable()
export class EmitterService {
  getComponents() {
    return [
      new Content(Comp1Component, {name: 'c1'}),
      new Content(Comp2Component, { name: 'c2'})
    ];
  }
}
