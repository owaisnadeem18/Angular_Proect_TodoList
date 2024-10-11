import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  title: string   
  descr: string  
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();


  onSubmit() {
    const todo = {
      sno: 1 ,
      descr: this.descr ,
      isActive: true , 
      title: this.title
    }
    this.todoAdd.emit(todo)    

  }



}

