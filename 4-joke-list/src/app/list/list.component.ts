import { Component, OnInit } from '@angular/core';
import { jokes } from '../joke';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  jokes = jokes;
  constructor() { }

  ngOnInit(): void {
  }

  countUpvotes(): number {
    let sum = 0;
    for (let index = 0; index < jokes.length; index++) {
      const joke = jokes[index];
      sum += joke.upvotes;
    }
    return sum;
  }

  countDownvotes(): number {
    let sum = 0;
    for (let index = 0; index < jokes.length; index++) {
      const joke = jokes[index];
      sum += joke.downvotes;
    }
    return sum;
  }

  countAllVotes(): number {
    return this.countUpvotes() + this.countDownvotes();
  }
}
