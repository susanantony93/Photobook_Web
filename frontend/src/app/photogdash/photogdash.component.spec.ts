import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotogdashComponent } from './photogdash.component';

describe('PhotogdashComponent', () => {
  let component: PhotogdashComponent;
  let fixture: ComponentFixture<PhotogdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotogdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotogdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
