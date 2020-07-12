import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthResponse } from '../auth-response';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: AuthService) { }

  currentUser: AuthResponse;
 
  ngOnInit() {
    this.currentUser = this.loginService.currentUser;
  }

  logout(): void {
    this.loginService.handleLogout();
  }
}
