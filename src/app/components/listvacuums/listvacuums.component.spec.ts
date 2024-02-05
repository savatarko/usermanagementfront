import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvacuumsComponent } from './listvacuums.component';

describe('ListvacuumsComponent', () => {
  let component: ListvacuumsComponent;
  let fixture: ComponentFixture<ListvacuumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListvacuumsComponent]
    });
    fixture = TestBed.createComponent(ListvacuumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
