import {Component, Input} from '@angular/core';
import {Task} from './task/task';
import {dummyTasks} from './task/const';

@Component({
  selector: 'app-tasks',
  imports: [
    Task
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  @Input({required: true}) name!: string|undefined
  @Input({required: true}) userId!: string;

  get selectedUserTasks() {
    return dummyTasks.filter((t) => t.userId === this.userId)
  }

}
