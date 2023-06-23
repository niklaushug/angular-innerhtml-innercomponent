import {Component, Input, OnInit} from '@angular/core';
import {AvailbleBSPositions} from "ngx-bootstrap/positioning";

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input()
  placement: AvailbleBSPositions = 'top'
  constructor() { }

  ngOnInit(): void {
  }

}
