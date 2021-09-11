import { Component, OnInit } from '@angular/core';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})


export class EventDetailComponent  {
  constructor(public dialog: MatDialog) {
    this.openDialog();
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