import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturebookingsComponent } from './futurebookings.component';

describe('FuturebookingsComponent', () => {
  let component: FuturebookingsComponent;
  let fixture: ComponentFixture<FuturebookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturebookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturebookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
