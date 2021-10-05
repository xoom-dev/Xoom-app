import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../../services/event/event.service';
import {TicketService} from '../../../services/tickets/ticket.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  eventId: string;
  events;
  tickets;
  addTicketForm;
  editTicketForm;
  ticketId;
  // ticket;

  constructor( private activatedRoute: ActivatedRoute,
               private eventService: EventService,
               private ticketService: TicketService) {
    this.editTicketForm = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      number_available: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.getEventId();
    this.getEvents();
    this.getEventTickets();
    this.addTicketForm = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      number_available: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  getEventId(): void {
    this.activatedRoute.params.subscribe(
      (param) => {
        this.eventId = param.eventId;
      }
    );
  }

  getEvents(): void{
      this.eventService.getAllEvent().subscribe(
        response => {
          this.events = response.map((e) => ({id: e.payload.doc.id, ...e.payload.doc.data()}));
      });
  }

  onChange(): void {
    this.getEventTickets();
  }

  getEventTickets(): void {
    this.ticketService.getEventTickets(this.eventId).subscribe(
      response => {
        this.tickets = response.map(e => ({id: e.payload.doc.id, ...e.payload.doc.data()}));
      }
    );
  }

  createTicket(): void{
    if (this.eventId){
      const ticket = {user_id: this.eventService.getCurrentUser() , event_id: this.eventId, ...this.addTicketForm.value};
      this.ticketService.createTickets(ticket).then(
        resolved => {
          this.getEventTickets();
        }
      );
    }else {
      alert('please select an event');
    }
    this.addTicketForm.reset();
  }

  getTicket(id: string): any{
    this.ticketId = id;
    this.ticketService.getTickets(id).subscribe(
      response => {
        this.editTicketForm = new FormGroup({
          name: new FormControl(response?.name, Validators.required),
          amount: new FormControl(response.amount, Validators.required),
          number_available: new FormControl(response.number_available, Validators.required),
          description: new FormControl(response.description, Validators.required)
        });
      }
    );
  }

  updateTicket(): void{
    this.ticketService.updateTicket(this.editTicketForm.value, this.ticketId);
  }

  deleteTicket(ticketId): void{
      this.ticketService.deleteTicket(ticketId);
      this.getEventTickets();
  }

}
