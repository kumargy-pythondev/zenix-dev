import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradestationComponent } from './tradestation.component';

describe('TradestationComponent', () => {
  let component: TradestationComponent;
  let fixture: ComponentFixture<TradestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradestationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TradestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
