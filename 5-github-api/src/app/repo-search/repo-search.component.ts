import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repo';
import { RepoSearchResults } from '../models/search-repo';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  public githubRepoQuery!: string;
  public githubResults!: RepoSearchResults;
  
  constructor(private githubService:GithubService) { }

  public searchRepos() {
    this.githubService.getRepositorySearchResults(this.githubRepoQuery).subscribe(
      (data) => { this.githubResults = data}
    );
  }

  public debugValami() {
    this.githubResults.items.forEach(element => {
      console.log(element.name);
    });    
  }

  ngOnInit(): void {
  }

}
