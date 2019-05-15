import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  /**
   * An object representing the user for the login form
   */
  public user: any;
  displayRegister : boolean ;
  displayLogin : boolean = true;
 
 
  constructor(private _userService: UserService) { }
 
  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: ''
    };
  }
 
  login() {
    this._userService.login({'username': this.user.username, 'password': this.user.password});
    this.user = {
      username: '',
      password: ''
    };
  }

  register(){
    this._userService.register({'username': this.user.username, 'email': this.user.email, 'password': this.user.password});
    this.user = {
      username: '',
      email: '',
      password: ''
    };
  }
 
  refreshToken() {
    this._userService.refreshToken();
  }
 
  logout() {
    this._userService.logout();
  }
 
  setBoolean1(){
    this.displayRegister = true;
    this.displayLogin = false;
    
  }

  setBoolean2(){
    this.displayRegister = false;
    this.displayLogin = true;
    
  }

  setRegisterSuccess(){

    this._userService.registerSuccess = false;
  }

}
