import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesPricingComponent } from './examples-pricing.component';

describe('ExamplesPricingComponent', () => {
  let component: ExamplesPricingComponent;
  let fixture: ComponentFixture<ExamplesPricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplesPricingComponent]
    });
    fixture = TestBed.createComponent(ExamplesPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
