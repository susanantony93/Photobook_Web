import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user
  isLoggedIn
  title = 'photobook';
  constructor(private router:Router) {     
    this.user = JSON.parse(localStorage.getItem('currentUser'));     
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));    
  }

  logout() {
    this.user = null;
    localStorage.setItem('currentUser', this.user);
    localStorage.setItem('isLoggedIn', "false");
    this.router.navigate(['/index']).then(() => {
      window.location.reload();
    });; //navigates user to their dashboard 
       
  }
}
