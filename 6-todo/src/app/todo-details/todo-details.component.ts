import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  @Input() todo!: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
