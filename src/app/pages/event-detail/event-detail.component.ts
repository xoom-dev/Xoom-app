import { Component, OnInit } from '@angular/core';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})


export class EventDetailComponent implements OnInit {
  id = "";
  eventDetail: any;
  constructor(public dialog: MatDialog, private activatedRoute: ActivatedRoute, public eventService: EventService) {
    // this.openDialog();

  }
ngOnInit(){
  this.activatedRoute.params.subscribe(res=>{
    console.log(res);
    this.id =res.id;
    this.getEventDetail();
  })
}
getEventDetail(){
  this.eventService.getEventById(this.id).subscribe(res=>{
   console.log(res);
    this.eventDetail = res.map((e) => ({id: e.payload.doc.id, ...e.payload.doc.data()}));
    console.log(this.eventDetail);
  })
}
  openDialog() {
   const dialogRef = this.dialog.open(PaymentComponent, {
      data: {
        animal: 'panda'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}