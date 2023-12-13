import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelCaroselComponent } from './pixel-carosel.component';

describe('PixelCaroselComponent', () => {
  let component: PixelCaroselComponent;
  let fixture: ComponentFixture<PixelCaroselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixelCaroselComponent]
    });
    fixture = TestBed.createComponent(PixelCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
