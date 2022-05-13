import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoService: TodoService
  ) { }

  async ngOnInit() {
    this.getAllTodos();
  }

  async getAllTodos() {
    try {
      this.todos = await this.todoService.getAllTodos();
    } catch (err) {
      console.error(err);
    }
  }

}
