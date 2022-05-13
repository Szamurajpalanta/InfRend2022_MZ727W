import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskById(id: number) {
    return lastValueFrom(this.http.get<Task[]>(`http://localhost:3000/api/task/${id}`));
  }

  getAllTasks() {
    return lastValueFrom(this.http.get<Task[]>('http://localhost:3000/api/task'));
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

  createTask(task: Task) {
    return lastValueFrom(this.http.post<Task>('http://localhost:3000/api/task', task));
  }

  updateTask(task: Task) {
    return lastValueFrom(this.http.put<Task>('http://localhost:3000/api/task', task));
  }

  deleteTodo(id: number) {
    return lastValueFrom(this.http.delete<Task>(`http://localhost:3000/api/todo/${id}`));
  }
}