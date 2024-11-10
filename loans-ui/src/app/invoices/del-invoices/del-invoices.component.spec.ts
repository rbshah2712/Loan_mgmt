import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelInvoicesComponent } from './del-invoices.component';

describe('DelInvoicesComponent', () => {
  let component: DelInvoicesComponent;
  let fixture: ComponentFixture<DelInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
