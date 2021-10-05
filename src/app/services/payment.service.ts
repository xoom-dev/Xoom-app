import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpService) { }
  makePayment(params) : Promise<any> {
    return new Promise((resolve, reject) =>{
      this.http.Post("https://demo.campay.net/api/collect/", params).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err);
      });
    }) 
    
  }
}
