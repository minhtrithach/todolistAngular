import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todos';
@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  todos!: Todo[];
  inputTodo: string = "";
  inputRelatePerson: string = ""
  inputEstimateDate: Date = new Date();
  updateTodo: string = "";
  updateRelatePerson: string = ""
  updateEstimateDate: Date = new Date();
  date: Date = new Date();
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Todo 1',
        completed: false,
        startdate: this.date,
        relatePerson: 'Tri',
        estimateDate: this.date

      }
    ]
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
      startdate: this.date,
      relatePerson: this.inputRelatePerson,
      estimateDate: this.inputEstimateDate
    });
    console.log(this.inputTodo)
    this.inputTodo = "";
  }
  updateContent(id: number) {
    this.todos[id] = {
      content: this.updateTodo,
      completed: this.todos[id].completed,
      startdate: this.date,
      relatePerson: this.updateRelatePerson,
      estimateDate: this.updateEstimateDate
    }
    console.log(this.todos[id]);
    return this.todos[id];
  }
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }



}
