import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';

import {TableCellContentComponentContextI, TableCellContentComponentI} from "../table/table.component";

@Directive({
  selector: '[appCellComponent]'
})
export class CellComponentDirective implements OnInit {
  @Input()
  content!: TableCellContentComponentI

  // TODO replace type any with RatingComponent | TooltipComponent
  componentRef!: ComponentRef<any>
  constructor(
    private cfr: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) {}

  ngOnInit() {
    // TODO Share resolved component factory
    const componentFactory = this.cfr.resolveComponentFactory(this.content.component);
    this.componentRef = this.vcr.createComponent(componentFactory);
    for (let key in this.content.context) {
      this.componentRef.instance[key] = this.content.context[key as keyof TableCellContentComponentContextI];
    }
  }
}
