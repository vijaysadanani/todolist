import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title: string = "Todo List App"
  constructor(public snackBar: MatSnackBar) { }
    ngOnInit(): void {
  }

  todo: Todo[] = [
    {"task": "Wash car",
    "completed": false},
    {
      "task": "Mow lawn",
      "completed": true
    }, 
    {
      "task": "Finish coding",
      "completed": false
    }
  ]

  completeNotif(): void {
    this.snackBar.open("Task Completed!", "Close", {duration: 3000});
  }

  removeNotif(): void {
    this.snackBar.open("Task Removed! I hope you were sure about that.", "Close", {duration: 3000});
  }

  removeTask(todo: Todo): void {
    var index = this.todo.indexOf(todo);
    if (index >= 0) {
      this.todo.splice( index, 1 );
    }
  }

  addTask(todo: Todo): void {
    this.todo.push(todo);
  }

}


