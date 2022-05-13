import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input() task!: Task;
  isEditing: boolean = false;
  state: number = 0;  
  tempName: string = '';
  tempDescription: string = '';

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.setTempVariables();

    if (this.task.isDone) {
      this.state = 1;
    }
  }

  toggleEditMode() {
    if (this.isEditing) {
      this.isEditing = false;
    } else {
      this.isEditing = true;
    }
  }

  setTempVariables() {
    this.tempName = this.task.name;
    this.tempDescription = this.task.description;
  }

  markDone() {
    this.task.isDone = true;
    this.state = 1;
    this.updateTask();    
  }

  getDueDateString(): string {
    return this.task.dueDate.toString().split('T')[0];
  }

  async updateTask() {
    if (this.isEditing) {
      this.task.name = this.tempName;
      this.task.description = this.tempDescription;
      this.toggleEditMode();
    }

    try {
      await this.taskService.updateTask(this.task);
    } catch (err: any) {
      console.error(err);
    }    
  }

  async deleteTask() {
    this.state = -1;
    
    try {
      await this.taskService.deleteTask(this.task.id);
    } catch (err: any) {
      console.error(err);
    }
  }
}
