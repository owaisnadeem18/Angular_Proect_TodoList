import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent, AddTodoComponent , TodoItemComponent , NgIf ] ,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  localItem : string | null ;
  todos: Todo[] = [];

  constructor() {
    this.localItem = localStorage.getItem("todos")
    if (this.localItem) {
      this.todos = JSON.parse(this.localItem)
    }
  }


  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index , 1) 
    localStorage.setItem("todos" , JSON.stringify(this.todos))
  }
  
  addTodo(todo: Todo) {
    this.todos.push(todo) 
    localStorage.setItem("todos" , JSON.stringify(this.todos))
    this.todos.map((x:any)=>  x = "");
}

}
