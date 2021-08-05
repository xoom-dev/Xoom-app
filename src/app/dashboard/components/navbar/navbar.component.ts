import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../../services/firebase/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: any;
  name: string;
  adv: string;


  constructor(private firebase: FirebaseService, private route: Router) { }

  ngOnInit(): void {
    this.getUserDetail();
    this.name = this.user.displayName;
    const frst = this.name.charAt(0);
    const secnd = this.name.charAt(1);
    this.adv = frst.concat(secnd);
  }

  getUserDetail(): void{
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logout(): void{
    this.firebase.signout();

  }
}
