import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {User} from './user/user';
import {DUMMY_USERS} from './user/dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('disco-ang');
  users = DUMMY_USERS

  onSelectUser(id: string){
    console.log(id);
  }

}
