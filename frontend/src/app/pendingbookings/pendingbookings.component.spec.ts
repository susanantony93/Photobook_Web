import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingbookingsComponent } from './pendingbookings.component';

describe('PendingbookingsComponent', () => {
  let component: PendingbookingsComponent;
  let fixture: ComponentFixture<PendingbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
