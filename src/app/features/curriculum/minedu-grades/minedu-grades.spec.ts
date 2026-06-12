import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineduGrades } from './minedu-grades';

describe('MineduGrades', () => {
  let component: MineduGrades;
  let fixture: ComponentFixture<MineduGrades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MineduGrades],
    }).compileComponents();

    fixture = TestBed.createComponent(MineduGrades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
