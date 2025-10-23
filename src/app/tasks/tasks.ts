import {Component, Input} from '@angular/core';
import {Task} from './task/task';
import {dummyTasks} from './task/const';
import {NewTask} from './new-task/new-task';

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

  @Input({required: true}) name!: string|undefined
  @Input({required: true}) userId!: string;
  tasks= dummyTasks
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasks.filter((t) => t.userId === this.userId)
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId)
  }

  onStartAddTask(){
    this.isAddingTask = !this.isAddingTask;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

}
