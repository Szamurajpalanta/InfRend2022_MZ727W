import { Component, Input, Output, EventEmitter,  OnInit } from '@angular/core';
import { Joke, jokes } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  constructor() { 
    
  }
  @Input() joke!: Joke;
  @Output() vote = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  upvote() {
    this.vote.emit(true);
  }

  downvote() {
    this.vote.emit(false);
  }
}
