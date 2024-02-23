/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobCountsComponent } from './job-counts.component';

describe('JobCountsComponent', () => {
  let component: JobCountsComponent;
  let fixture: ComponentFixture<JobCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
