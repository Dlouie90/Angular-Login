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
  email: string = '';
  password: string = '';
  emailAnimation: any;
  pwAnimation: any;
  submitAnimation: any;

  constructor(private router: Router,
    private alertService: AlertService) {
  }

  ngOnInit(): void {
  }

  onEmail(): void {
    this.emailAnimation = anime({
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

    this.alertService.clear();
    if (this.email === '' || this.email === undefined || this.email === null) {
      this.alertService.error('Please enter your email address.');
      return;
    }
    if (this.password === '' || this.password === undefined || this.password === null) {
      this.alertService.error('Please enter your password.');
      return;
    }
    this.alertService.error('Email or Password is incorrect.');
  }
}
