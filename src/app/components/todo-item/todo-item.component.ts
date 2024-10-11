import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'] // Corrected 'styleUrls'
})
export class TodoItemComponent {

  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()

  onClick(todo: Todo) {
      this.todoDelete.emit(todo)
      console.log(" ------ ");
  }
}