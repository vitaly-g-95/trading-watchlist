import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IRate } from '../irate';
import { RateService } from '../rate.service';
import { ContextMenuComponent } from '../context-menu/context-menu.component';

@Component({
  selector: 'app-trading-watchlist',
  templateUrl: './trading-watchlist.component.html',
  styleUrls: ['./trading-watchlist.component.scss']
})
export class TradingWatchlistComponent implements OnInit {
  @ViewChild('symbolInput') symbolInput: ElementRef;
  @ViewChild('contextMenu') contextMenu: ContextMenuComponent;

  rates: IRate[] = [];
  rateFormOpened = false;
  symbol = '';
  symbolError = '';
  contextMenuOpened = false;
  contextMenuItems = {
    remove: 'Remove'
  };

  private contextMenuTarget: IRate;

  constructor(
    private rateService: RateService
  ) {}

  ngOnInit(): void {
    this.rateService.getRates().subscribe(rates => {
      this.rates = rates;
    });
  }

  toggleRateForm(): void {
    this.rateFormOpened = !this.rateFormOpened;
    this.symbol = '';
    this.symbolError = '';

    if (this.rateFormOpened) {
      setTimeout(() => {
        this.symbolInput.nativeElement.focus();
      });
    }
  }

  addRate($event: any): void {
    $event.preventDefault();

    this.symbolError = '';

    if (this.symbol.length !== 6) {
      this.symbolError = 'Invalid symbol!';
      return;
    }

    const symbol = this.symbol.toUpperCase();

    const duplicate = this.rates.find(rate => rate.symbol === symbol);

    if (duplicate) {
      this.symbolError = 'Rate already exists!';
      return;
    }

    this.rateService.getRate(
      symbol.slice(0, 3),
      symbol.slice(3)
    ).subscribe(
      rate => {
        this.rates = this.rates.concat(rate);
        this.toggleRateForm();
      },
      () => {
        this.symbolError = 'Invalid symbol!';
      }
    );
  }

  contextMenuOpen($event: any, rate: IRate): void {
    this.contextMenu.open($event);

    this.contextMenuTarget = rate;
  }

  contextMenuItemClick(action: string): void {
    switch (action) {
      case 'remove':
        this.rates = this.rates.filter(rate => rate !== this.contextMenuTarget);
        break;
    }
  }
}
