import {Component, OnInit} from '@angular/core';
import {Member} from '../member';
import {MemberService} from '../member.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  members: Member[];
  email = '';
  password = '';

  constructor(private memberService: MemberService, private router: Router) {
  }

  getMembers(): void {
    this.memberService.getMembers().then(members => this.members = members);
  }

  ngOnInit(): void {
    this.getMembers();
  }

  onLogin(): void {
    for (const m of this.members) {
      if (m.email.toLowerCase() === this.email.toLowerCase() && m.password === this.password) {
        console.log('login success');
        this.router.navigate(['./home', m.id]);
      }
    }
  }
}