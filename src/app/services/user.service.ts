import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { USERS } from '../mockdata/mock-users';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
    users: User[] = USERS;

    getAllUsers(): Observable<User[]> {
        return of(this.users);
    }
}
