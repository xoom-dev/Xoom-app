import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventDetailComponent } from 'src/app/pages/event-detail/event-detail.component';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  phonenumber = ""
  msg;
  //paymentForm:FormGroup;
  constructor( private paymentService: PaymentService, public dialogRef: MatDialogRef<EventDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string}) { }


    paymentProviders=[
      { "id":"1",
        "name":"MTN Mobile Money",
        "code":"MTN",
        "class":"mtn",
        "imageUrl":"assets/images/paymentlogos/mtn.jpeg"
      },
       { "id":"2",
        "name":"Orange Money",
        "code":"ORANGE",
        "class":"orange",
        "imageUrl":"assets/images/paymentlogos/orange.jpeg"
      }
    ];
    activeProvider = {};

  ngOnInit(): void {
    this.activeProvider = this.paymentProviders[0]
  
  }
  selectProv(prov){
    this.activeProvider = prov;
  }

  validatePayment(){
    this.msg = undefined;
    console.log(this.phonenumber)
    if(!this.phonenumber || this.phonenumber.length < 8){
      this.msg = "enter_valid_phonenumber";
      return;
    }

     const param = {
      "amount": "5",
      "currency": "XAF",
      "from": "237" + this.phonenumber,
      "description": "Payment for " + this.data.name + " event",
    }
   // let res = {
     // operator: "MTN",
     // reference: "2ec8e3b6-fcf3-43fe-8809-acfcb96c3ca3",
     // ussd_code: "*126#"
    //}
    this.paymentService.makePayment(param).then(res=>{
      console.log(res);
    });
  }

   closeDialog() {
     this.dialogRef.close('end');
  }
}
