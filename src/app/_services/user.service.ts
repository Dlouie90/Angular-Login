import {Injectable, OnInit} from '@angular/core';
import {User} from '../_models/user.model';
import {USERS} from '../mock-users';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
  users: User[] = USERS;

  getAllUsers(): Observable<User[]> {
    console.log(this.users);
    return Observable.of(this.users);
  }
}
