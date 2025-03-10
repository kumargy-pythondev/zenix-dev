import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineComponent } from './outline.component';

describe('OutlineComponent', () => {
  let component: OutlineComponent;
  let fixture: ComponentFixture<OutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
