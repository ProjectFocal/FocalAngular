import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'focal-angular';
  showNav = true;
  constructor(private router:Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (this.router.url === '/login' || this.router.url === '/register' || this.router.url === '/account-recovery') {
        this.showNav = false;
      } else {
        this.showNav = true;
      }
    });
  }
}

