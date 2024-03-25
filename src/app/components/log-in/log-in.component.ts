import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  credentials: any = {};

  constructor(private userService: UserService, private router: Router) {}

  login(credentials: any): void {
    this.userService.login(credentials).subscribe(
      response => {
        console.log('User logged in successfully:', response);
        localStorage.setItem('userId', response.userId);
        localStorage.setItem('token', response.token);

        // log out
        // localStorage.removeItem('userId');
        // localStorage.removeItem('token');

        this.userService.redirectToWelcome();
        alert('You have been logged in!');
      },
      error => {
        console.error('Error logging in:', error);
      }
    );
  }
}