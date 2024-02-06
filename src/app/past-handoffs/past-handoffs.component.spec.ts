import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastHandoffsComponent } from './past-handoffs.component';

describe('PastHandoffsComponent', () => {
  let component: PastHandoffsComponent;
  let fixture: ComponentFixture<PastHandoffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PastHandoffsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastHandoffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
