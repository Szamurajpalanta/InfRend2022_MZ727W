import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Repository } from '../models/repo';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://api.github.com';

  getMultipleUsers(user: string): Observable<User[]> {
    let params = new HttpParams().set('q', user);
    const usersUrl = '/search/users';
    return this.http.get<User[]>(this.baseUrl + usersUrl, {
      params: params
    });
  }

  getUserRepos(user: string): Observable<Repository[]> {
    const reposUrl = `/users/${user}/repos`;
    return this.http.get<Repository[]>(this.baseUrl + reposUrl);
  }

  getRepos(query: string): Observable<Repository[]> {
    const reposUrl = `/search/repositories?q=${query}`;
    return this.http.get<Repository[]>(this.baseUrl + reposUrl);
  }

  getSingleUser(query: string): Observable<User> {
    const userUrl = `/users/${query}`;
    return this.http.get<User>(this.baseUrl + userUrl);
  }
}

