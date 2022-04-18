import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  public githubUserQuery!: string;
  public githubProfile!:any;
  public githubRepo!:any[];
  
  constructor(private githubService:GithubService) { }

  public searchUser() {
    this.githubService.getSingleUser(this.githubUserQuery).subscribe(
      (data) => { this.githubProfile = data; }
    );

    this.githubService.getRepos(this.githubUserQuery).subscribe(
      (data) => { this.githubRepo = data; },
    )
  }

  ngOnInit(): void {
  }

}