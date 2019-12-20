import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachEditComponent } from './beach-edit.component';

describe('BeachEditComponent', () => {
  let component: BeachEditComponent;
  let fixture: ComponentFixture<BeachEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
