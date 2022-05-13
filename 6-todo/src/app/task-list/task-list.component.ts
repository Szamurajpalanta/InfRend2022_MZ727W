import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) { }

  async ngOnInit() {
    this.getAllTasks();
  }

  async getAllTasks() {
    try {
      this.tasks = await this.taskService.getAllTasks();
      console.log(this.tasks);
    } catch (err) {
      console.error(err);
    }
  }

  addNewTask() {

  }

}
