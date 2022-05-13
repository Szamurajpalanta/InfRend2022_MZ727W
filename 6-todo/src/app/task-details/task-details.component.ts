import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input() task!: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
