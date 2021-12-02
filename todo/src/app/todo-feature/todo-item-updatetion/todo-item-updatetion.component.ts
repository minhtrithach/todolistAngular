import { Component, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-item-updatetion',
  templateUrl: './todo-item-updatetion.component.html',
  styleUrls: ['./todo-item-updatetion.component.scss']
})
export class TodoItemUpdatetionComponent implements OnInit {

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
}
