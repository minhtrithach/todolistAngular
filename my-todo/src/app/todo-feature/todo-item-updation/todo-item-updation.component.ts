import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Todo } from 'src/app/model/todo.model';


@Component({
  selector: 'app-todo-item-updation',
  templateUrl: './todo-item-updation.component.html',
  styleUrls: ['./todo-item-updation.component.scss']
})
export class TodoItemUpdationComponent implements OnInit {
  @Output() updationTodo= new EventEmitter<Todo>();
  constructor() { }
  currentDate=new Date()
  ngOnInit(): void {
  }
  todoUpdationObject: Todo= {
    content: "",
    completed: false,
    startDate: this.currentDate,
    relatePerson: "",
    estimateDate: this.currentDate
  };
  handleUpdateTodo(todo:Todo) {
    this.updationTodo.emit(todo)
  }
  
}
