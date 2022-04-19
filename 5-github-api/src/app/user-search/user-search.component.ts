import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Repository } from '../models/repo';
import { UserSearchResults } from '../models/search-user';
import { User } from '../models/user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  public githubUserQuery!: string;
  public githubResults!: UserSearchResults;
  public githubRepos!: Repository[];
  
  constructor(private githubService:GithubService) { }

  public searchUsers() {
    this.githubService.getMultipleUsersSearchResults(this.githubUserQuery).subscribe(
      (data) => { this.githubResults = data}
    );
  }

  public debugValami() {
    this.githubResults.items.forEach(element => {
      console.log(element.login);
    });    
  }

  ngOnInit(): void {
  }

}