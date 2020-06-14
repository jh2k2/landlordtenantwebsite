import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTlComponent } from './for-tl.component';

describe('ForTlComponent', () => {
  let component: ForTlComponent;
  let fixture: ComponentFixture<ForTlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForTlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
