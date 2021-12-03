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
 
  currentDate: Date = new Date();
  showAddition=false;
  showUpdation=false;
  updationIndex!: number;

  ngOnInit(): void {
    this.todos = [
      {
        content: "Todo 1",
        completed: false,
        startDate: this.currentDate,
        estimateDate: this.currentDate,
        relatePerson: 'Trí',
      },
      {
        content: "Todo 2",
        completed: false,
        startDate: this.currentDate,
        estimateDate: this.currentDate,
        relatePerson: 'Minh',
      }
    ];

  }
  updateIndex(i:number)
  {
    console.log(i)
    this.updationIndex=i;
    
  }
  updateTodo(todo:Todo,i:number)
  {
    this.todos[i]={
      content:todo.content,
      completed:todo.completed,
      estimateDate:todo.estimateDate,
      startDate:todo.startDate,
      relatePerson:todo.relatePerson
    }
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  handleDelete(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  toggleDone(index: number) {
    this.todos.map((v, i) => {
      if (i == index) v.completed = !v.completed;

      return v;
    })
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'Dialog' });
  }
}
