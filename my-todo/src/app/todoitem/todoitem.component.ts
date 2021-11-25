import { Component, OnInit } from '@angular/core';
import { Todo } from'../model/Todos';
@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  todos!:Todo[] ;
  inputTodo:string = "";
  inputRelatePerson:string=""
  inputEstimateDate:Date = new Date(); 
  date: Date = new Date();  
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Todo 1',
        completed: false,
        startdate:'21/11/2021',
        relatePerson:'Tri',
        estimateDate:'22/11/2021'

      }
    ]
  }
  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
      startdate:this.date.toString(),
      relatePerson:this.inputRelatePerson,
      estimateDate:this.inputEstimateDate.toString()
    });
    console.log(this.inputTodo)
    this.inputTodo="";
  }
  updateContent(id:number){
    this.todos.push({
      content: this.inputTodo,
      completed: false,
      startdate:this.date.toString(),
      relatePerson:this.inputRelatePerson,
      estimateDate:this.inputEstimateDate.toString()
    });
    
  }
  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }
   


}
