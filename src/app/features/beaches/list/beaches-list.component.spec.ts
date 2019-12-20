import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachesListComponent } from './beaches-list.component';

describe('BeachesListComponent', () => {
  let component: BeachesListComponent;
  let fixture: ComponentFixture<BeachesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
