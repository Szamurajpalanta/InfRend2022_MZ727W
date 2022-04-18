import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Repository } from '../models/repo';
import { User } from '../models/user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  public githubUserQuery!: string;
  public githubProfiles!:User[];
  public githubRepos!:Repository[];
  
  constructor(private githubService:GithubService) { }

  public searchUser() {
    this.githubService.getMultipleUsers(this.githubUserQuery).subscribe(
      (data) => { this.githubProfiles = data}
    );
  }

  ngOnInit(): void {
  }

}