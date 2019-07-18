import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotopdComponent } from './photopd.component';

describe('PhotopdComponent', () => {
  let component: PhotopdComponent;
  let fixture: ComponentFixture<PhotopdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotopdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotopdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
