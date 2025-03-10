import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStickyFooterComponent } from './table-sticky-footer.component';

describe('TableStickyFooterComponent', () => {
  let component: TableStickyFooterComponent;
  let fixture: ComponentFixture<TableStickyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableStickyFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableStickyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
