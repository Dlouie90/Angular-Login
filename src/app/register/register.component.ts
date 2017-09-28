import {Component, OnInit} from '@angular/core';
import {MemberService} from '../member.service';
import {Member} from '../member';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  static counter: 36;
  member: Member;
  email: string;
  password: string;
  desc: string;

  constructor(private memberService: MemberService) {
  }

  registerMember(): void {
    this.member = new Member(this.email, this.password, this.desc);
    this.memberService.addMember(this.member);
    console.log('This works!');
  }

}
