import { Component } from '@angular/core';
import { Joke, jokes } from './joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joke-list';
  jokes = jokes;
  newJoke!: Joke;

  initializeNewJoke() {
    this.newJoke = {
      user: "",
      text: "",
      upvotes: 0,
      downvotes: 0
    };
  }

  addJoke() {
    jokes.push(this.newJoke);
    this.initializeNewJoke();
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
