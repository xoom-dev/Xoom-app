import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterService } from 'src/app/services/router.service';
import { SkeletonService } from 'src/app/services/skeleton.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  submitTrigger= false;
  registrationForm: FormGroup;
  constructor(private skeleton: SkeletonService,
              private route: RouterService){}
 
  ngOnInit() {
    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      pobox: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      confirm_email: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required]),
    })
   this.skeleton.hideSkeleton();


  }
  ngOnDestroy(){
   this.skeleton.showSkeleton();
   
  }
  login(){

  }
  register(){
  this.submitTrigger = true;
  console.log(this.registrationForm.controls)
  if(!this.registrationForm.valid){
    return;
  }
}
}