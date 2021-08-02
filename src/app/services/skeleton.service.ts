import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkeletonService {

  constructor() { }

  hideSkeleton(){
    document.getElementById('appFooter').style.display = "none";
    // document.getElementById('appHeader').style.display = "none";
  }
  showSkeleton(){
    document.getElementById('appFooter').style.removeProperty('display');
    // document.getElementById('appHeader').style.removeProperty('display');
  }
}
