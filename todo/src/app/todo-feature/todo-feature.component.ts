import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-feature',
  templateUrl: './todo-feature.component.html',
  styleUrls: ['./todo-feature.component.scss']
})
export class TodoFeatureComponent implements OnInit {
  constructor(protected dialogService: NbDialogService) { }
  todos!: Todo[];
  inputTodo: Todo = new Todo();
  updateTodo: Todo = new Todo();
  currentDate: Date = new Date();
  show=false;
  updateIndex!: number;
  ngOnInit(): void {
    this.todos = [
      {
        content: "Ăn",
        completed: false,
        startDate: this.currentDate,
        estimateDate: this.currentDate,
        relatePerson: 'Trí',
      },
      {
        content: "Ngủ",
        completed: false,
        startDate: this.currentDate,
        estimateDate: this.currentDate,
        relatePerson: 'Trí',
      }
    ];

  }

 
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  handleDelete(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  handleToggleDone(index: number) {
    this.todos.map((v, i) => {
      if (i == index) v.completed = !v.completed;

      return v;
    })
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'Dialog' });
  }
}
