import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userEmail : String;
  userPassword : String;
  loginForm : FormGroup;
  error;
  constructor(private authService : AuthenticationService, private router : Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.minLength(2),  Validators.required,]),
      password: new FormControl('', [Validators.minLength(2),  Validators.required,]),

    })
  }

  login(){
    if (!this.loginForm.valid){
      return
    }
    const values = this.loginForm.value;
    this.userEmail = values.username;
    this.userPassword = values.password;
    this.authService.validate(this.userEmail, this.userPassword)
    .then((response) => {
      this.authService.setUserInfo({'user' : response['message'].split(' ')});
      this.authService.message = response['message'];
      this.router.navigate(['home']);

    }).catch(err_ =>{
      this.error = "wrong username/ password"
    })
  }

}