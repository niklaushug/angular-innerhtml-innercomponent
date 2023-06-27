import { Component, Input } from '@angular/core';

export type RatingContextI = {
  max: number
  rate: number
}

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements RatingContextI {
  @Input()
  max = 10;

  @Input()
  rate = 3;
}
