import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {Content} from '../models/content';
import {ContainerDirective} from '../common/container.directive';
import {DummyComponent} from '../common/dummy.component';
import {interval} from 'rxjs';

@Component({
  selector: 'app-proxy',
  template: `
              <div class="ad-banner-example">
                <h3>Proxy</h3>
                <ng-template container></ng-template>
              </div>
            `,
  styleUrls: ['./proxy.component.css']
})
export class ProxyComponent implements OnInit {
  @Input() currComponent: Content[];
  @ViewChild(ContainerDirective, {static: true}) container: ContainerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    let isOk = false;
    interval(10000)
      .subscribe(() => this.loadComponent(isOk = !isOk));
  }

  loadComponent(isOk: boolean) {
    let curr: Content;
    if (isOk) {
      curr = this.currComponent[0];
    }
    else {
      curr = this.currComponent[1];
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(curr.component);
    const viewContainerRef = this.container.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DummyComponent>(componentFactory);
    componentRef.instance.data = curr.data;
  }

}
