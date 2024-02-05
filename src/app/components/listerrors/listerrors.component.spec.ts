import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerrorsComponent } from './listerrors.component';

describe('ListerrorsComponent', () => {
  let component: ListerrorsComponent;
  let fixture: ComponentFixture<ListerrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerrorsComponent]
    });
    fixture = TestBed.createComponent(ListerrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
