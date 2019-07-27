import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {  
  userName = String
  user
  constructor() {     
    this.user = JSON.parse(localStorage.getItem('currentUser'));    
    this.userName = this.user.name;
    
  }

  ngOnInit() {
  }

}
