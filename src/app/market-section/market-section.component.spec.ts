import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSectionComponent } from './market-section.component';

describe('MarketSectionComponent', () => {
  let component: MarketSectionComponent;
  let fixture: ComponentFixture<MarketSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
