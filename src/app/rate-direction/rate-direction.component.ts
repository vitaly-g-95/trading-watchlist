import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-rate-direction',
  templateUrl: './rate-direction.component.html',
  styleUrls: ['./rate-direction.component.scss']
})
export class RateDirectionComponent implements OnChanges {
  @Input() rate: number;
  className = 'circle';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setClassName(changes.rate);
  }

  private setClassName(rate: SimpleChange): void {
    const { previousValue, currentValue } = rate;

    if (previousValue === null) {
      return;
    }

    this.className = (() => {
      if (currentValue < previousValue) {
        return 'down';
      }

      if (currentValue > previousValue) {
        return 'up';
      }

      return 'circle';
    })();
  }
}
