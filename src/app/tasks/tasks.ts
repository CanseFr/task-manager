import {Component, Input} from '@angular/core';
import {Task} from './task/task';
import {NewTask} from './new-task/new-task';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [
    Task,
    NewTask
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})

export class Tasks {
  @Input({required: true}) name!: string | undefined
  @Input({required: true}) userId!: string;

  isAddingTask = false;

  constructor(private tasksService: TasksService) {
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompleteTask(taskId: string) {

  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onClosedAddTask() {
    this.isAddingTask = false;
  }

}
