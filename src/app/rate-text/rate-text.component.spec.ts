import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateTextComponent } from './rate-text.component';

describe('RateTextComponent', () => {
  let component: RateTextComponent;
  let fixture: ComponentFixture<RateTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
