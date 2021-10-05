import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  private AUTH_HEADER = "Token";
  private tokenEndpoint = "https://demo.campay.net/api/token/";

  username = "8zBH7iQ7RdpJc1TAbbjZXPiAee8tcMv6rCsOEd6QICxbq0mx0v6nNL3vJ3ODmjTJC6SM9WDwXCjM4tFnmsA6nQ";
  password = "K7zxmDoZXyuyWUsHOi7B_v7ZKg1UqpjZMQlNYeWg_SGHTH4B_OxY9hvkloYwiPsOPtjTTPFzdXP_KyunQoO7dw";

  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private httpClient: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.method.toLocaleLowerCase() == "post" && req.params.has("channel"))
    console.log("got here", req)
    req = this.addAuthenticationToken(req);

    return next.handle(req);

  }
  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    // If we do not have a token yet then we should not set the header.
    // Here we could first retrieve the token from where we store it.
    let token = "";
    let param = {
      username: this.username,
      password: this.password
    }
      this.httpClient.post(this.tokenEndpoint ,param).subscribe(res=>{
      console.log(res);
      token = res["token"];

    })
    return request.clone({
      headers: request.headers.set(this.AUTH_HEADER, token)
    });
//       if(!token) {
//         return request;
//   }
//   // If you are calling an outside domain then do not add the token.
//   if(!request.url.match(/www.mydomain.com\//)) {
//   return request;
// }

  }

}
