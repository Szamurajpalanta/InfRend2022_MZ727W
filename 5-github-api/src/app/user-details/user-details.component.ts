import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../models/repo';
import { User } from '../models/user';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [GithubService]
})
export class UserDetailsComponent implements OnInit {

  @Input() githubUser!:User;
  userRepositories!: Repository[];
  isVisible: boolean = false;
  

  constructor(private githubService:GithubService) {
    
  }

  ngOnInit(): void {
    this.githubService.getUserRepos(this.githubUser.login).subscribe(
      (data) => { this.userRepositories = data; },
    );
    console.log(this.githubUser.name);
  }

  changeVisibility() {
    if (this.isVisible) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }

}