import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public authService : AuthenticationService, public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document){}
    profileJson: string = null;
    showLogout: boolean = false;
      ngOnInit(): void {
        this.authService.callSecureApi();
      this.auth.user$.subscribe(
      (profile) => {this.profileJson = JSON.stringify(profile, null, 2)
      console.log(profile)}
    );
  }
  loginWithRedirect(): void {
    this.auth.loginWithRedirect()
    // this.authService.login()

  }
  registerWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }
  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
  
}
