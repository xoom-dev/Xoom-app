import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterService } from 'src/app/services/router.service';
import { SkeletonService } from 'src/app/services/skeleton.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitTrigger = false;
  constructor(private skeleton: SkeletonService,
              private route: RouterService){}
 
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
   this.skeleton.hideSkeleton();


  }
  ngOnDestroy(){
   this.skeleton.showSkeleton();
  }
  login(){
    this.submitTrigger = true;
  }
register(route){
  this.route.navigate(route)

}
}