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
}
