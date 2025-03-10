import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCoinChartComponent } from './graph-coin-chart.component';

describe('GraphCoinChartComponent', () => {
  let component: GraphCoinChartComponent;
  let fixture: ComponentFixture<GraphCoinChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphCoinChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphCoinChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
