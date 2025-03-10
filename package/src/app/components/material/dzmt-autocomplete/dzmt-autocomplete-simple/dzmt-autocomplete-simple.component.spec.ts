import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtAutocompleteSimpleComponent } from './dzmt-autocomplete-simple.component';

describe('DzmtAutocompleteSimpleComponent', () => {
  let component: DzmtAutocompleteSimpleComponent;
  let fixture: ComponentFixture<DzmtAutocompleteSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtAutocompleteSimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtAutocompleteSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
