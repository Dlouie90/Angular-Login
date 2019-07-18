import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private router: Router,
    private alertService: AlertService) {
  }

  ngOnInit(): void {
  }

  onLogin(): void {
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
