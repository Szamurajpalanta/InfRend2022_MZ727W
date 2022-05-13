import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoById(id: number) {
    return lastValueFrom(this.http.get<Todo[]>(`http://localhost:3000/api/todo/${id}`));
  }

  getAllTodos() {
    return lastValueFrom(this.http.get<Todo[]>('http://localhost:3000/api/todo'));
  }

  /*
  searchTodos(query: string) {
    return lastValueFrom(this.http.get<Todo[]>('http://localhost:3000/api/search/subjects', {
      params: {
        search: query
      }
    }));
  }
  */

  createTodo(subject: Todo) {
    return lastValueFrom(this.http.post<Todo>('http://localhost:3000/api/todo', subject));
  }

  updateTodo(subject: Todo) {
    return lastValueFrom(this.http.put<Todo>('http://localhost:3000/api/todo', subject));
  }

  deleteTodo(id: number) {
    return lastValueFrom(this.http.delete<Todo>(`http://localhost:3000/api/todo/${id}`));
  }
}