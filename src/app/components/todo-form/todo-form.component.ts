import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { endWith } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor() { }
  @Output() save = new EventEmitter<Todo>();
  @Input() todoArray!: Todo[];
  newTask!: string;
  todo = {} as Todo;
  ngOnInit(): void {
  }

  addTask(){
    this.todo = {task: "", completed:false};
    this.todo.task = this.newTask;

    if(this.todo.task){
      this.save.emit(this.todo);
    }
    this.newTask = "";
  }
  
}
