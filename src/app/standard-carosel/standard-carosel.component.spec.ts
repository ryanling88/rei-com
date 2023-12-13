import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCaroselComponent } from './standard-carosel.component';

describe('StandardCaroselComponent', () => {
  let component: StandardCaroselComponent;
  let fixture: ComponentFixture<StandardCaroselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandardCaroselComponent]
    });
    fixture = TestBed.createComponent(StandardCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
