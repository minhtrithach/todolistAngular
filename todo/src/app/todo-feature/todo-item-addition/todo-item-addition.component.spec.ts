import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemAdditionComponent } from './todo-item-addition.component';

describe('TodoItemAdditionComponent', () => {
  let component: TodoItemAdditionComponent;
  let fixture: ComponentFixture<TodoItemAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
