import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingrequestComponent } from './pendingrequest.component';

describe('PendingrequestComponent', () => {
  let component: PendingrequestComponent;
  let fixture: ComponentFixture<PendingrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
