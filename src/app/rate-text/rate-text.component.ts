import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-rate-text',
  templateUrl: './rate-text.component.html',
  styleUrls: ['./rate-text.component.scss']
})
export class RateTextComponent implements OnChanges {
  @Input() rate: number;
  className = '';

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
        return 'text-danger';
      }

      if (currentValue > previousValue) {
        return 'text-success';
      }

      return '';
    })();
  }
}
