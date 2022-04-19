import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { Repository } from '../models/repo';
import { UserSearchResults } from '../models/search-user';
import { RepoSearchResults } from '../models/search-repo';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://api.github.com';
  public userResults!: UserSearchResults;
  public repoResults!: RepoSearchResults;

  getMultipleUsersSearchResults(query: string): Observable<UserSearchResults> {
    let params = new HttpParams().set('q', query);
    const usersUrl = '/search/users';
    return this.http.get<UserSearchResults>(this.baseUrl + usersUrl, {
      params: params
    });
  }

  getUserRepos(user: string): Observable<Repository[]> {
    const reposUrl = `/users/${user}/repos`;
    return this.http.get<Repository[]>(this.baseUrl + reposUrl);
  }

  getRepositorySearchResults(query: string): Observable<RepoSearchResults> {
    let params = new HttpParams().set('q', query);
    const reposUrl = '/search/repositories';
    return this.http.get<RepoSearchResults>(this.baseUrl + reposUrl, {
      params: params
    });
  }

  getSingleUser(query: string): Observable<User> {
    const userUrl = `/users/${query}`;
    return this.http.get<User>(this.baseUrl + userUrl);
  }
}

