import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerProfileComponent } from './photographer-profile.component';

describe('PhotographerProfileComponent', () => {
  let component: PhotographerProfileComponent;
  let fixture: ComponentFixture<PhotographerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
