import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskType} from './types';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})


export class NewTask {

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskType>();
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''

  onCancel() {
    this.cancel.emit()
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle, summary: this.enteredSummary, date: this.enteredDate
    })
  }

}
