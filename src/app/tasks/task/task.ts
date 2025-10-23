import {Component, EventEmitter, Input, Output} from '@angular/core';
import {dummyTasks} from './const';
import {TaksType} from './type';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: TaksType;
  @Output() completeTask = new EventEmitter<string>();

  onCompleteTask() {
    this.completeTask.emit(this.task.id);
  }
}
