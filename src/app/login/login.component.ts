import {Component, OnInit} from '@angular/core';
import {Member} from '../_models/member';
import {MemberService} from '../_services/member.service';
import {Router} from '@angular/router';
import {AlertService} from '../_services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  members: Member[];
  email = '';
  password = '';

  constructor(private memberService: MemberService,
              private router: Router,
              private alertService: AlertService) {
  }

  getMembers(): void {
    this.memberService.getMembers().then(members => this.members = members);
  }

  ngOnInit(): void {
    this.getMembers();
  }

  onLogin(): void {
    this.alertService.clear();
    if (this.email === '' || undefined || null) {
      this.alertService.error('Please enter your email address.');
      return;
    }
    if (this.password === '' || undefined || null) {
      this.alertService.error('Please enter your password.');
      return;
    }
    for (const m of this.members) {
      if (m.email.toLowerCase() === this.email.toLowerCase() && m.password === this.password) {
        this.router.navigate(['./home', m.id]);
      }
    }
  }
}
