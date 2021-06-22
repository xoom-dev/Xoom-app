import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth : AuthService, private route : Router) { }
  profileJson;
  canActivate(){
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
    if(this.profileJson){
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }
}