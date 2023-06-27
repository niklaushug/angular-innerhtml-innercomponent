import {Component, Input} from '@angular/core';
import {AvailbleBSPositions} from "ngx-bootstrap/positioning";

export type TooltipContextI = {
  placement: AvailbleBSPositions
}

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements TooltipContextI {
  @Input()
  placement: AvailbleBSPositions = 'top'
}
