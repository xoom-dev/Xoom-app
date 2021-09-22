import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase/firebase.service';
import {EventService} from '../../../services/event/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(): void{
    this.eventService.getEvents().subscribe(
      response => {
        this.events = response.map((e) => ({id: e.payload.doc.id, ...e.payload.doc.data()}));
        console.log(this.events);
      });
  }

  deleteEvent(eventId: string): void{
   this.eventService.deleteEvent(eventId);
   this.getAllEvents();
  }

}
