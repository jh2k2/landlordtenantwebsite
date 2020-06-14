import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextVariationComponent } from './text-variation.component';

describe('TextVariationComponent', () => {
  let component: TextVariationComponent;
  let fixture: ComponentFixture<TextVariationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextVariationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
