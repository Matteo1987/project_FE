import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachCreateComponent } from './beach-create.component';

describe('BeachCreateComponent', () => {
  let component: BeachCreateComponent;
  let fixture: ComponentFixture<BeachCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
