import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingWatchlistComponent } from './trading-watchlist.component';

describe('TradingWatchlistComponent', () => {
  let component: TradingWatchlistComponent;
  let fixture: ComponentFixture<TradingWatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingWatchlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
