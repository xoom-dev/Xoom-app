import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private route: Router, public eventService: EventService){}
    events = [];
  openDetails(){
    this.route.navigate(['event', 1])
  }
  ngOnInit(){
    this.getDetails();
  }
  getDetails(){
    this.eventService.getAllEvent().subscribe(res=>{
     
      this.events = res.map((e) => ({id: e.payload.doc.id, ...e.payload.doc.data()}));
      console.log(this.events);
    })
  }
  
}
