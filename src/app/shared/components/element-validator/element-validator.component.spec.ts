import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementValidatorComponent } from './element-validator.component';

describe('ElementValidatorComponent', () => {
  let component: ElementValidatorComponent;
  let fixture: ComponentFixture<ElementValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
