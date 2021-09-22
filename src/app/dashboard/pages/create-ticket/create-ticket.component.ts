import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  eventId: string;

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEventId();
  }
  getEventId(): void {
    this.activatedRoute.params.subscribe(
      (param) => {
        this.eventId = param.eventId;
      }
    );
  }

}
