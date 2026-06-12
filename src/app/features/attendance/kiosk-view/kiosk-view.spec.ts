import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskView } from './kiosk-view';

describe('KioskView', () => {
  let component: KioskView;
  let fixture: ComponentFixture<KioskView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KioskView],
    }).compileComponents();

    fixture = TestBed.createComponent(KioskView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
