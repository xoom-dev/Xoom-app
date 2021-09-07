import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase/firebase.service';
import {EventService} from '../../../services/event/event.service';
import {log} from "util";

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
      (res: any) => {
        this.events = res.map(e => {
          return {
            event: e.payload.doc.data()
          };
        });
        console.log(this.events);
      }
    );
  }

}
