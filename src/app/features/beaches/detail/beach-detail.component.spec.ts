import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachDetailComponent } from './beach-detail.component';

describe('BeachDetailComponent', () => {
  let component: BeachDetailComponent;
  let fixture: ComponentFixture<BeachDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
