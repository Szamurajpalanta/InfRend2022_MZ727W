import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getSubject(id: number) {
    return lastValueFrom(this.http.get<Todo[]>(`http://localhost:3000/api/todo/${id}`));
  }

  getSubjects() {
    return lastValueFrom(this.http.get<Todo[]>('http://localhost:3000/api/todo'));
  }

  /*
  searchSubjects(query: string) {
    return lastValueFrom(this.http.get<Todo[]>('http://localhost:3000/api/search/subjects', {
      params: {
        search: query
      }
    }));
  }
  */

  createSubject(subject: Todo) {
    return lastValueFrom(this.http.post<Todo>('http://localhost:3000/api/todo', subject));
  }

  updateSubject(subject: Todo) {
    return lastValueFrom(this.http.put<Todo>('http://localhost:3000/api/todo', subject));
  }

  deleteSubject(id: number) {
    return lastValueFrom(this.http.delete<Todo>(`http://localhost:3000/api/todo/${id}`));
  }
}