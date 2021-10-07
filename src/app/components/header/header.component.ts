import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
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
}

declare var $;