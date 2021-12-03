import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemUpdationComponent } from './todo-item-updation.component';

describe('TodoItemUpdatetionComponent', () => {
  let component: TodoItemUpdationComponent;
  let fixture: ComponentFixture<TodoItemUpdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemUpdationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
