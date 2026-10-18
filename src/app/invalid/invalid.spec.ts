import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invalid } from './invalid';

describe('Invalid', () => {
  let component: Invalid;
  let fixture: ComponentFixture<Invalid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Invalid],
    }).compileComponents();

    fixture = TestBed.createComponent(Invalid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
