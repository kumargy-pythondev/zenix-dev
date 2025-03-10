import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtDialogComponent } from './dzmt-dialog.component';

describe('DzmtDialogComponent', () => {
  let component: DzmtDialogComponent;
  let fixture: ComponentFixture<DzmtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
