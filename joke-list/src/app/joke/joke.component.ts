import { Component, Input,  OnInit } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  constructor() { 
    
  }
  @Input() joke!: Joke;

  ngOnInit(): void {
  }

  upvote() {
    this.joke.upvotes++;
  }

  downvote() {
    this.joke.downvotes++;
  }

  isApproved(): boolean {
    if (this.joke.upvotes - this.joke.downvotes > 50) {
      return true;
    } else {
      return false;
    }
  }
}
