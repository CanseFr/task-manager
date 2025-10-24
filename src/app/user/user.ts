import {Component, computed, EventEmitter, Input, input, output, Output} from '@angular/core';
import {UserDumy} from './types';
import {Card} from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [
    Card
  ],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required:true}) user!: UserDumy;
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
