import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRegister } from './web-register';

describe('WebRegister', () => {
  let component: WebRegister;
  let fixture: ComponentFixture<WebRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebRegister],
    }).compileComponents();

    fixture = TestBed.createComponent(WebRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
