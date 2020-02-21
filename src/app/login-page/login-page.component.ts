import { Component, OnInit, ɵConsole } from '@angular/core';
import { Login } from '../service/login';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  modelLogin = new Login(null, null);

  loginForm = new FormGroup({
    Username: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
    Password: new FormControl('', [Validators.required, this.noWhitespaceValidator])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(heroForm): void {
    this.loginForm.markAllAsTouched();
  }

  get UserName() {
    return this.loginForm.get('Username');
  }

  get Password() {
    return this.loginForm.get('Password');
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
}
