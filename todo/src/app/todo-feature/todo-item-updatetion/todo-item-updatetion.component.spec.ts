import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemUpdatetionComponent } from './todo-item-updatetion.component';

describe('TodoItemUpdatetionComponent', () => {
  let component: TodoItemUpdatetionComponent;
  let fixture: ComponentFixture<TodoItemUpdatetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemUpdatetionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemUpdatetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
