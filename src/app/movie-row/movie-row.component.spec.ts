/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovieRowComponent } from './movie-row.component';

describe('MovieRowComponent', () => {
  let component: MovieRowComponent;
  let fixture: ComponentFixture<MovieRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
