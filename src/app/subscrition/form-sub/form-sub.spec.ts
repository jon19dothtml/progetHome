import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSub } from './form-sub';

describe('FormSub', () => {
  let component: FormSub;
  let fixture: ComponentFixture<FormSub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
