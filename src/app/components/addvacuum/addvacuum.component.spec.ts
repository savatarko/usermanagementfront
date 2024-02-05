import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvacuumComponent } from './addvacuum.component';

describe('AddvacuumComponent', () => {
  let component: AddvacuumComponent;
  let fixture: ComponentFixture<AddvacuumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddvacuumComponent]
    });
    fixture = TestBed.createComponent(AddvacuumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
