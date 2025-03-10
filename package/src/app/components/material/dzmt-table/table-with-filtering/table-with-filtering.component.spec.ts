import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithFilteringComponent } from './table-with-filtering.component';

describe('TableWithFilteringComponent', () => {
  let component: TableWithFilteringComponent;
  let fixture: ComponentFixture<TableWithFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithFilteringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableWithFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
