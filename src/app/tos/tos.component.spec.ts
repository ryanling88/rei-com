import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TosComponent } from './tos.component';

describe('TosComponent', () => {
  let component: TosComponent;
  let fixture: ComponentFixture<TosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TosComponent]
    });
    fixture = TestBed.createComponent(TosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
