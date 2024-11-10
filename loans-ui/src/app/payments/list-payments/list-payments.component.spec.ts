import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaymentsComponent } from './list-payments.component';

describe('ListPaymentsComponent', () => {
  let component: ListPaymentsComponent;
  let fixture: ComponentFixture<ListPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
