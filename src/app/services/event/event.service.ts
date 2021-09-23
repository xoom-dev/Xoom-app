import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FirebaseApp} from '@angular/fire';
import {Router} from '@angular/router';
import {rejects} from "assert";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private angularFirestore: AngularFirestore, private angularAuthService: FirebaseApp, private route: Router ) { }

  getCurrentUser(): any{
    const  user = JSON.parse(localStorage.getItem('user'));
    return user.uid;
   // console.log(user.uid);
  }

  getEvents(): any {
    const events = this.angularFirestore.collection('events', ref => ref.where('userId', '==', this.getCurrentUser())).snapshotChanges();
    return events;
  }

  getAllEvent(): any {
    const events = this.angularFirestore.collection('events').snapshotChanges();
    return events;

  }

  createEvent(event: any): any {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection('events').add(event).then(
        response => {
          this.route.navigate([`/create_ticket/${response.id}`]);
        },
        error => reject(error));
    });
  }

  deleteEvent(eventId: string): any{
    return this.angularFirestore.collection('events').doc(`${eventId}`).delete().then(
      response => {
        alert('Event successfully deleted');
      },
      error => rejects(error)
    );
  }


}
