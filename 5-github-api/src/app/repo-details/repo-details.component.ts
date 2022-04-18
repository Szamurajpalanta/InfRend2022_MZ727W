import { Component, Input, OnInit } from '@angular/core';
import { Repository } from '../models/repo';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  @Input() githubRepo!:Repository;

  constructor() { }

  ngOnInit(): void {
  }

}
