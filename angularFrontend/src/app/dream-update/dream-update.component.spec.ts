import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamUpdateComponent } from './dream-update.component';

describe('DreamUpdateComponent', () => {
  let component: DreamUpdateComponent;
  let fixture: ComponentFixture<DreamUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
