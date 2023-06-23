import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input()
  max = 10;

  @Input()
  rate = 3;

  constructor() { }

  ngOnInit(): void {
  }
}
