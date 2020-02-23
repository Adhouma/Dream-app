import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamAddComponent } from './dream-add.component';

describe('DreamAddComponent', () => {
  let component: DreamAddComponent;
  let fixture: ComponentFixture<DreamAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
