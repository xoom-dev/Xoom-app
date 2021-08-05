import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseApp} from '@angular/fire';
import {Router} from '@angular/router';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  user: any;
  constructor(private fireBase: FirebaseApp, private route: Router) { }

  signIn(email: string, password: string): any {
    this.fireBase.auth().signInWithEmailAndPassword(email, password).then(() => {
      const currentUser = this.fireBase.auth().currentUser;
      const user: User = {
        displayName: currentUser.displayName,
        email: currentUser.email,
        emailVerified: currentUser.emailVerified,
        uid: currentUser.uid
      };
      this.setUserData(user);
      // this.route.navigate(['/dashboard']);
    }).catch((error) => {
      console.log(error);
    });
  }

  signup(email: string, password: string, name: string): any {
    this.fireBase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
      this.sendVerificationEmail();
      this.fireBase.auth().currentUser.updateProfile(
        {
          displayName: name,
        }
      ).then(() => {
        const currentUser = this.fireBase.auth().currentUser;
        const user: User = {
          displayName: currentUser.displayName,
          email: currentUser.email,
          emailVerified: currentUser.emailVerified,
          uid: currentUser.uid
        };
        this.setUserData(user);
        this.route.navigate(['/dashboard']);
      }).catch((error) => {
        // An error occurred
        // ...
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  sendVerificationEmail(): void{
    this.fireBase.auth().currentUser.sendEmailVerification().then(() => {
      alert('verification email sent');
    }).catch((error) => {
      console.log(error);
    });
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('user') !== null ){
      return true;
    }
    return false;
  }

  setUserData(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  signout(): void{
    this.fireBase.auth().signOut().then(() => {
      localStorage.removeItem('user');
    }).catch((error) => {
      console.log(error);
    });
  }

  resetPassword(email: string): void{
    this.fireBase.auth().sendPasswordResetEmail(email).then(() => {
      // password reset email sent!
    }).catch((error) => {
      console.log(error);
    });
  }

  updatePassword(newPassword: string): void {
    this.fireBase.auth().currentUser.updatePassword(newPassword).then(() => {
      // password updated
    }).catch((error) => {
      console.log(error);
    });
  }



}
