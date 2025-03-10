import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketCapitalComponent } from './market-capital.component';

describe('MarketCapitalComponent', () => {
  let component: MarketCapitalComponent;
  let fixture: ComponentFixture<MarketCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketCapitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
