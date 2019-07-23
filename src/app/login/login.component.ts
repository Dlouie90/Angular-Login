import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import * as anime from 'animejs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string = '';
  usernameCheck: boolean = false;
  password: string = '';
  passwordCheck: boolean = false;
  usernameAnimation: any;
  credCheck: boolean = false;
  pwAnimation: any;
  submitAnimation: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onUsername(): void {
    this.usernameAnimation = anime({
      targets: 'path',
      strokeDashoffset: {
        value: 0,
        duration: 700,
        easing: 'easeOutQuart'
      },
      strokeDasharray: {
        value: '240 1386',
        duration: 700,
        easing: 'easeOutQuart'
      }
    });
  }

  onPassword(): void {
    this.pwAnimation = anime({
      targets: 'path',
      strokeDashoffset: {
        value: -336,
        duration: 700,
        easing: 'easeOutQuart'
      },
      strokeDasharray: {
        value: '240 1386',
        duration: 700,
        easing: 'easeOutQuart'
      }
    });
  }

  onLogin(): void {
    this.submitAnimation = anime({
      targets: 'path',
      strokeDashoffset: {
        value: -730,
        duration: 700,
        easing: 'easeOutQuart'
      },
      strokeDasharray: {
        value: '530 1386',
        duration: 700,
        easing: 'easeOutQuart'
      }
    });
    this.usernameCheck = false;
    this.passwordCheck = false;
    this.credCheck = false;
    if (this.username === '' || this.username === undefined || this.username === null) {
      this.usernameCheck = true;
      return;
    }
    if (this.password === '' || this.password === undefined || this.password === null) {
      this.passwordCheck = true;
      return;
    }
    this.credCheck = true;
  }
}
