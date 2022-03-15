import { Component, Input } from '@angular/core';
import { Joke, jokes } from './joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joke-list';
  jokes = jokes;
}
