import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelLoansComponent } from './del-loans.component';

describe('DelLoansComponent', () => {
  let component: DelLoansComponent;
  let fixture: ComponentFixture<DelLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
