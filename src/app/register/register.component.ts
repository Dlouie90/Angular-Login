import {Component} from '@angular/core';
import {AlertService} from '../_services/alert.service';
import {isUndefined} from 'util';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  counter = 36;
  email: string;
  password1: string;
  password2: string;
  desc: string;

  constructor(private userService: UserService,
              private alertService: AlertService) {
  }

  registerMember(): void {
    this.alertService.clear();
    if (this.email === '' || this.email === undefined || this.email === null) {
      this.alertService.error('Please enter your email address.');
      return;
    }
    if (this.password1 === '' || this.password1 === undefined || this.password1 === null) {
      this.alertService.error('Please enter your password');
      return;
    }
    if (this.password2 === '' || this.password2 === undefined || this.password2 === null) {
      this.alertService.error('Please re-type your password.');
      return;
    }
    if (this.password1 !== this.password2) {
      this.alertService.error('Passwords don\'t match.');
      return;
    }
    if (this.desc === '' || this.desc === undefined || this.desc === null) {
      this.alertService.error('Please enter a description.');
      return;
    }
    this.alertService.success('Registration was successful. Please Login.');
    // console.log(this.memberService.getMembers());
  }

}
