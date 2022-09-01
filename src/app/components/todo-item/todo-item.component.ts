import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() todo: Todo | undefined;
  @Output() complete = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
  @Output() removeMyTask = new EventEmitter<Todo>();

  completeTask(){
    if(this.todo != undefined){
      this.todo.completed = true;
    }

    this.complete.emit();
  }

  removeTask(){
    this.removeMyTask.emit(this.todo);
    this.remove.emit();
  }


}
