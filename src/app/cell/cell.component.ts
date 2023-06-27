import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {
  TableCellContentComponentI,
  TableCellContextI,
  TableCellFormatI
} from "../table/table.component";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @ViewChild('tooltipHost', {read: ViewContainerRef})
  viewContainerRef!: ViewContainerRef

  @Input()
  cell?: TableCellContextI

  cellFormatI = TableCellFormatI

  get contentAsComponent() {
    return this.cell?.content as TableCellContentComponentI
  }
}
