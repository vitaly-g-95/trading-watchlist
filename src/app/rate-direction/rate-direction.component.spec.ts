import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDirectionComponent } from './rate-direction.component';

describe('RateDirectionComponent', () => {
  let component: RateDirectionComponent;
  let fixture: ComponentFixture<RateDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
