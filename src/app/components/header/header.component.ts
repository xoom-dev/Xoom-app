import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { json } from 'express';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userdata = {}
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.getUserdata();
    $('.toggle-menu').click(function(){
      $('.toggle-menu').toggleClass('active')
      $('.right-menu').toggleClass('active')
    })

    $('.search-icon').click(function(){
      $('.search-input').toggleClass('show')
      $('.logo').toggleClass('hide')
    })
  }
  signIn(){
    this.route.navigateByUrl("auth/signin")
  }
  getUserdata(){
   this.userdata = JSON.parse(localStorage.getItem("user"))
   console.log(this.userdata);
  }
}

declare var $;