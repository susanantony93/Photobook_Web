import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user
  title = 'photobook';
  constructor(private router:Router) {     
    this.user = JSON.parse(localStorage.getItem('currentUser'));        
  }

  logout() {
    this.user = null;
    localStorage.setItem('currentUser', this.user);
    this.router.navigate(['/index']); //navigates user to their dashboard
  }
}
