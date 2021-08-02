import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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

}

declare var $;