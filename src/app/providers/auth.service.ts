import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../environments/environment';
interface Message {
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  message: any;

  constructor(private http : HttpClient) { }

  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }
 
  public validate(email, password) {
    return this.http.get('http://localhost:3000/authenticate?username=' + email + '&password=' +password).toPromise()
  }
  callApi(): void {
    this.http
      .get(`${env.dev.serverUrl}/api/messages/public-message`)
      .subscribe((result: Message) => {
        this.message = result.message;
      });
  }

  callSecureApi(): void {
    this.http
      .get(`${env.dev.serverUrl}/api/messages/protected-message`)
      .subscribe((result: Message) => {
        this.message = result.message;
      });
  }
  login(): void {
    this.http
      .get(`${env.dev.serverUrl}/login`)
      .subscribe((result: Message) => {
        this.message = result;
        console.log(this.message)
      });
  }
}
