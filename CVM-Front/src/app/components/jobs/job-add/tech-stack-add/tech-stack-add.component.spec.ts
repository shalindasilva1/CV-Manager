/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TechStackAddComponent } from './tech-stack-add.component';

describe('TechStackAddComponent', () => {
  let component: TechStackAddComponent;
  let fixture: ComponentFixture<TechStackAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechStackAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStackAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
