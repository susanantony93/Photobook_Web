import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastactivityComponent } from './pastactivity.component';

describe('PastactivityComponent', () => {
  let component: PastactivityComponent;
  let fixture: ComponentFixture<PastactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
