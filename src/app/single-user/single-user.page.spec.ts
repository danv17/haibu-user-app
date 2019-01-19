import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserPage } from './single-user.page';

describe('SingleUserPage', () => {
  let component: SingleUserPage;
  let fixture: ComponentFixture<SingleUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
