import { Component, OnInit, ɵConsole } from '@angular/core';
import { Login } from '../service/login';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  modelLogin = new Login(null, null);

  loginForm = new FormGroup({
    Username : new FormControl(),
    Password : new FormControl ()
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(heroForm): void {
    console.log('onsubmit');
    console.log(this.UserName.value);
    console.log(this.Password.value);
  }

  get UserName() {
    return this.loginForm.get('Username');
  }

  get Password() {
    return this.loginForm.get('Password');
  }
}
