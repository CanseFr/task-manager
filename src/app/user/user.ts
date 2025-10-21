import {Component, computed, EventEmitter, Input, input, output, Output} from '@angular/core';
import {UserDumy} from './types';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required:true}) user!: UserDumy;

  // Old
  // @Input({required:true}) id!:string;
  // @Input({required: true}) avatar!: string
  // @Input({required: true}) name!: string
  @Output() select = new EventEmitter<string>();

  // ------------------------

   // New
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>()

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })

  onSelectedUser() {
    this.select.emit(this.user.id);
    // this.select.emit(this.name);
    // this.select.emit(this.id);
  }
}
