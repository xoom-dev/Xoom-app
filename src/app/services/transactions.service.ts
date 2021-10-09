import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private angularFirestore: AngularFirestore) { }

  getAllTransactions(): any {
    const transactions = this.angularFirestore.collection('transactions').snapshotChanges();
    return transactions;
  }

  addTransaction( transaction: any): any {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection('transactions').add(transaction).then(
        response => {
        },
        error => reject(error));
    });
  }

  getTransaction(id: string): any{
    return this.angularFirestore.collection('transactions').doc(id).valueChanges();
  }

  updateTransaction(transaction: any, id: string): any{
    return this.angularFirestore.collection('transactions').doc(id).update(transaction);
  }}
