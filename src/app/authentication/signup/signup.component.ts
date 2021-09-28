import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../../services/firebase/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  createAccountForm: any;
  constructor(private authService: FirebaseService) { }

  ngOnInit(): void {
    this.createAccountForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void{
  this.authService.signup(this.createAccountForm.value.email, this.createAccountForm.value.password, this.createAccountForm.value.name);
  }

}
