import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../../services/firebase/firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  passwordRecoveryForm: FormGroup;

  constructor(private authService: FirebaseService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.passwordRecoveryForm = new FormGroup({
      email: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password);
  }

  sentEmail(): void{
    this.authService.resetPassword(this.passwordRecoveryForm.value.email);
  }

}
