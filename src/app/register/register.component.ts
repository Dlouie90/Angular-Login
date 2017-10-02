import {Component, OnInit} from '@angular/core';
import {MemberService} from '../_services/member.service';
import {Member} from '../_models/member';
import {AlertService} from '../_services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  counter = 36;
  member: Member;
  email: string;
  password1: string;
  password2: string;
  desc: string;

  constructor(private memberService: MemberService,
              private alertService: AlertService) {
  }

  registerMember(): void {
    this.alertService.clear();
    if (this.email === '' || undefined || null) {
      this.alertService.error('Please enter your email address.');
      return;
    }
    if (this.password1 === '' || undefined || null) {
      this.alertService.error('Please enter your password');
      return;
    }
    if (this.password2 === '' || undefined || null) {
      this.alertService.error('Please re-type your password.');
      return;
    }
    if (this.desc === '' || undefined || null) {
      this.alertService.error('Please enter a description.');
      return;
    }
    if (this.password1 !== this.password2) {
      this.alertService.error('Passwords don\'t match.');
      return;

    }
    this.member = new Member(++this.counter, this.email, this.password1, this.desc);
    this.memberService.addMember(this.member);
    // console.log(this.memberService.getMembers());
  }

}
