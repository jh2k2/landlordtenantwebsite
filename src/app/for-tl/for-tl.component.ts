import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-for-tl',
  templateUrl: './for-tl.component.html',
  styleUrls: ['./for-tl.component.css']
})
export class ForTlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.landlord-info-page').hide();
    $('.landlord-btn').hide();

    $('.tenant__btn').click(function(e) {
      console.log('tenant-clicked');
      e.preventDefault();
      $(this).addClass('active');
      $('.landlord__btn').removeClass('active');
      $('.tenant-info-page').show();
      $('.tenant-btn').show();
      $('.landlord-info-page').hide();
      $('.landlord-btn').hide()
    });

    $('.landlord__btn').click(function(e) {
      console.log('landlord-clicked');
      e.preventDefault();
      $(this).addClass('active');
      $('.tenant__btn').removeClass('active');
      $('.landlord-info-page').show();
      $('.landlord-btn').show();
      $('.tenant-info-page').hide();
      $('.tenant-btn').hide();
    });

  }

}
