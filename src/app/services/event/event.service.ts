import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FirebaseApp} from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private angularFirestore: AngularFirestore, private angularAuthService: FirebaseApp ) { }

  getCurrentUser(): any{
    const  user = JSON.parse(localStorage.getItem('user'));
    return user.uid;
  }

  getEvents(): any {
    const events = this.angularFirestore.
    collection('events', ref => ref.where('userId', '==', this.getCurrentUser())).snapshotChanges();
    return events;
  }

  createEvent(event: any): any {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection('events').add(event).then(response => { console.log(response.id); }, error => reject(error));
    });
  }

}
