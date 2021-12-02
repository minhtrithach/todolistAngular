import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() index!:number;
  
  @Output() updateTodoIndex = new EventEmitter<number>();
  @Output() updateTodoItem = new EventEmitter<Todo>();
  @Output() updateTodoCompleted = new EventEmitter<number>()
  currentDate: Date = new Date();
  updateTodo: Todo = {
    content: "",
    completed: false,
    startDate: this.currentDate,
    relatePerson: "",
    estimateDate: this.currentDate
  };
  show = true;

  constructor(protected dialogService: NbDialogService) { }

  ngOnInit(): void {
  }
  toggleDone(index: number) {
    this.updateTodoCompleted.emit(index);
  }
  handleUpdateTodo(todo: Todo) {
    this.updateTodoItem.emit(todo)
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'Dialog' });
  }


}