import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {Content} from '../models/content';
import {ContainerDirective} from './container.directive';
import {DummyComponent} from './dummy.component';
// import {interval} from 'rxjs';

@Component({
  selector: 'app-loader',
  template: '<ng-template container></ng-template>'
})
export class LoaderComponent implements OnInit {
  @Input() currComponents: Content[];
  @ViewChild(ContainerDirective, {static: true}) container: ContainerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    let isOk = false;
    // interval(3000)
    //   .subscribe(() => this.loadComponent(isOk = !isOk));
  }

  loadComponent(isOk: boolean) {
    let curr: Content;
    if (isOk) {
      curr = this.currComponents[0];
    }
    else {
      curr = this.currComponents[1];
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(curr.component);
    const viewContainerRef = this.container.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DummyComponent>(componentFactory);
    componentRef.instance.data = curr.data;
  }

}
