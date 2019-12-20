import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in Successfully');
    }, error => {
      console.log('failed to log in');
    });
  }

  // Checks if User is logged into App
  // Stores session token to local storage
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  // Log User out of App
  logout() {
    localStorage.removeItem('token');
    console.log('User logged out');
  }
}
