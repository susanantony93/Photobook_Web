import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindphotographerComponent } from './findphotographer.component';

describe('FindphotographerComponent', () => {
  let component: FindphotographerComponent;
  let fixture: ComponentFixture<FindphotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindphotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindphotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
