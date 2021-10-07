import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventDetailComponent } from 'src/app/pages/event-detail/event-detail.component';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor( private paymentService: PaymentService,public dialog: MatDialogRef<EventDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string}) { }

  ngOnInit(): void {
    let param = {
      "amount": "5",
      "currency": "XAF",
      "from": "237670612010",
      "description": "Payment description",
    }
    let res = {
      operator: "MTN",
      reference: "2ec8e3b6-fcf3-43fe-8809-acfcb96c3ca3",
      ussd_code: "*126#"
    }
    this.paymentService.makePayment(param).then(res=>{
      // console.log(res);
    });
  }

  closeDialog() {
    this.dialog.close('Pizza!');
  }
}
