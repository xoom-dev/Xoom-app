import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventDetailComponent } from 'src/app/pages/event-detail/event-detail.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) { }

  ngOnInit(): void {
  }

  // closeDialog() {
  //   this.dialogRef.close('Pizza!');
  // }
}
