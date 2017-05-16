import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoPageComponent } from './to-do-page.component';

describe('ToDoPageComponent', () => {
  let component: ToDoPageComponent;
  let fixture: ComponentFixture<ToDoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
