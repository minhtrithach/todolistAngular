import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';


@Component({
  selector: 'app-todo-item-addition',
  templateUrl: './todo-item-addition.component.html',
  styleUrls: ['./todo-item-addition.component.scss']
})
export class TodoItemAdditionComponent implements OnInit {
  currentDate:Date = new Date();
  inputTodo: Todo={
    content: "",
    completed: false,
    startDate: this.currentDate,
    relatePerson: "",
    estimateDate: this.currentDate

}
@Output() additionTodo = new EventEmitter<Todo>();
  ngOnInit(): void {
  }
  addTodo(){
    this.inputTodo={
    content: "",
    completed: false,
    startDate: this.currentDate,
    relatePerson: "",
    estimateDate: this.currentDate
    }
  }
  handleAddTodo(todo:Todo) {
    this.additionTodo.emit(todo)
  }
}

