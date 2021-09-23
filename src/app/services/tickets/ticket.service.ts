import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FirebaseApp} from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private angularFirestore: AngularFirestore, private angularAuthService: FirebaseApp) { }

  getEventTickets(eventId): any {
    const tickets = this.angularFirestore.collection('tickets', ref => ref.where('event_id', '==', eventId)).snapshotChanges();
    return tickets;
  }

  createTickets( tickets: any): any {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection('tickets').add(tickets).then(
        response => {
          // this.route.navigate([`/create_ticket/${response.id}`]);
        },
        error => reject(error));
    });
  }
}
