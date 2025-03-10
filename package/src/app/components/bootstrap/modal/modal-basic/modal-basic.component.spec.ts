import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBasicComponent } from './modal-basic.component';

describe('ModalBasicComponent', () => {
  let component: ModalBasicComponent;
  let fixture: ComponentFixture<ModalBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
