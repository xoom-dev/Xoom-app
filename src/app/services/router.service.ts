import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  navigate(link, param?){
    param ? this.router.navigate([link, param]) : this.router.navigateByUrl(link)
  }
}
