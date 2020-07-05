import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { LoginModel } from '../login-model';
import { AuthService } from '../auth.service';
import { AuthResponse } from '../auth-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private invalidPasswordText: string = "Invalid username or password!";
  private loginErrorText: string = "Unknown login Error";

  constructor(private loginService: AuthService) { }

  loginModel: LoginModel = {
    name: "",
    password: ""
  };

  loginWarning: string;
  currentUser: AuthResponse;
 
  ngOnInit() {
    this.currentUser = this.loginService.currentUser;
  }

  login(): void {
    this.loginWarning = undefined;

    this.loginService.requestJwtToken(this.loginModel)
      .subscribe(
        res => this.handleLogin(res),
        err => this.handleLoginError(err)
      );
  }

  logout(): void {
    this.loginService.handleLogout();
  }

  handleLogin(user: AuthResponse): void {
    this.loginService.handleLogin(user);
  }

  handleLoginError(err): void {    
    if (err.error.errorText === "Invalid username or password.") {      
      this.loginWarning = this.invalidPasswordText;
    } else {
      this.loginWarning = this.loginErrorText;
    }
  }

}
