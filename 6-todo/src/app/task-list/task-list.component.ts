import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  undoneTasks: Task[] = [];
  overdueTasks: Task[] = [];
  completedTasks: Task[] = [];
  newTask: Task = new Task;
  statusMessage: string = '';
  showStatusMessage: boolean = false;
  success: boolean = false;  

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) { }

  async ngOnInit() {
    this.getAllTasks();    
  }

  newTaskForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: [''],
    dueDate: ['', [Validators.required]],
  });

  async getAllTasks() {
    try {
      this.tasks = await this.taskService.getAllTasks();
      console.log(this.tasks);
    } catch (err) {
      console.error(err);
    }
  }

  sortTasks() {
    this.tasks.forEach(task => {
      if (task.isDone) {
        this.completedTasks.push(task);
      } else if (new Date() > task.dueDate) {
        this.overdueTasks.push(task);
      } else {
        this.undoneTasks.push(task);
      }
    });
  }

  getCurrentDate(): Date {
    return new Date();
  }

  async addNewTask() {
    this.showStatusMessage = true;
    this.newTask = this.newTaskForm.value;
    this.newTask.id = this.taskService.getLowestAvailableId(await this.taskService.getAllTasks());
    this.newTask.isDone = false;
    console.log(this.newTask);

    try {
      const insertedUser = await this.taskService.createTask(this.newTask);
      this.statusMessage = "A feladat sikeresen létejött.";
      this.success = true;
      this.getAllTasks();
    } catch (err: any) {
      this.statusMessage = err.error.message;
      this.success = false;
    }
  }

}
