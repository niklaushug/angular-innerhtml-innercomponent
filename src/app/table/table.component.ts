import {Component, Input } from '@angular/core';
import {RatingComponent, RatingContextI} from "../rating/rating.component";
import {TooltipComponent, TooltipContextI} from "../tooltip/tooltip.component";

// TODO move all types to other file

export type TableDataI = {
  header: TableHeaderI
  body: TableBodyI
}

type TableHeaderI = string[]

type TableBodyI = TableRowDataI[]

type TableRowDataI = TableCellContextI[]

export type TableCellContextI = {
  content: number | string | TableCellContentComponentI
  format: TableCellFormatI
}

export type TableCellContentComponentI = {
  // TODO replace any with RatingComponent | TooltipComponent
  component: any
  context: TableCellContentComponentContextI
}

export type TableCellComponentI = RatingComponent | TooltipComponent
export type TableCellContentComponentContextI = RatingContextI | TooltipContextI

export enum TableCellFormatI {
  Plain,
  InnerHtml,
  Percentage,
  Component
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input()
  data?: TableDataI
}
