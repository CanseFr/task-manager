import {Component, Input} from '@angular/core';
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
}
