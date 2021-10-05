import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private AUTH_HEADER = "Token";
  private tokenEndpoint = "https://demo.campay.net/api/token/";

  username = "8zBH7iQ7RdpJc1TAbbjZXPiAee8tcMv6rCsOEd6QICxbq0mx0v6nNL3vJ3ODmjTJC6SM9WDwXCjM4tFnmsA6nQ";
  password = "K7zxmDoZXyuyWUsHOi7B_v7ZKg1UqpjZMQlNYeWg_SGHTH4B_OxY9hvkloYwiPsOPtjTTPFzdXP_KyunQoO7dw";
  constructor(private http: HttpClient) { }

  get(url, params): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(url,).subscribe(res => {
        resolve(res);
      })
    }).catch(err => {
      return new Promise(err);
    })
  }
  Post(url, params) : Promise<any> {
    params.channel = "3";
   return this.loadInterceptors().then(res => {
      var headers = new HttpHeaders().append("Authorization", "Token " + res.token)
      console.log(params);
      return new Promise((resolve, reject) => {
        this.http.post(url, params, { headers: headers }).subscribe(res => {
          resolve(res);
        })
      }).catch(err => {
        return new Promise(err);
      })
    })

  }
  loadInterceptors(): Promise<any> {
    let param = {
      username: this.username,
      password: this.password
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.tokenEndpoint, param).subscribe(res => {
        resolve(res);
      })
    })
  }
}
