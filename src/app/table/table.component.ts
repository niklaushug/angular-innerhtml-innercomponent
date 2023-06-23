import {
  Component,
  ComponentFactoryResolver, ComponentRef,
  Input,
  OnInit,
  ViewChild, ViewContainerRef,
} from '@angular/core';
import {isNgContainer} from "@angular/compiler";
import {RatingComponent} from "../rating/rating.component";
import {TooltipComponent} from "../tooltip/tooltip.component";
import {AvailbleBSPositions} from "ngx-bootstrap/positioning";
export enum CellFormat {
  Plain,
  InnerHtml,
  Percentage,
  Tooltip,
  Rating
}

type RatingComponentI = {
  component: RatingComponent
  context: {
    max: number,
    rate: number
  }
}

type TooltipComponentI = {
  component: TooltipComponent
  context: {
    placement: AvailbleBSPositions
  }
}

type CellData = {
  content: number | string | RatingComponentI | TooltipComponentI,
  format: CellFormat
}

type RowData = CellData[]
type BodyData = RowData[]

export type TableData = {
  header: TableHeader
  body: BodyData
}

type TableHeader = string[]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @ViewChild('tooltipHost', {read: ViewContainerRef}) viewContainerRef!: ViewContainerRef

  @Input()
  data?: TableData

  // Pass enum to template
  format = CellFormat

  componentRef!: ComponentRef<any>

  constructor(private cfr: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    this.createComponent()
  }

  createComponent() {
    this.viewContainerRef.clear();

    const componentFactory = this.cfr.resolveComponentFactory(TooltipComponent)
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.placement = 'right'
  }

  protected readonly isNgContainer = isNgContainer;
}
