import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {User} from './user/user';
import {DUMMY_USERS} from './user/dummy-users';
import {Tasks} from './tasks/tasks';
import {UserDumy} from './user/types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS
  selectedUser: UserDumy | undefined = undefined;
  protected readonly title = signal('disco-ang');

  onSelectUser(id: string) {
    this.selectedUser = DUMMY_USERS.find((user) => id === user.id)
  }

}
