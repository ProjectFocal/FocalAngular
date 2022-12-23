import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const options = {
      strings: ['Welcome To Project Focal.', 'Starting the interplanetary boosters...', 'Fetching "good content".', ],
      typeSpeed: 90,
      backSpeed: 90,
      showCursor: false,
      fadeOut: false,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 1000,
      loop: true,
      contentType: 'html',
 };

 const typed = new Typed('.typed-element', options);


  }

}
