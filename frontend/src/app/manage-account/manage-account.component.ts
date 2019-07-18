import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {
  public edit = false;
  constructor() { }

  ngOnInit() {
  }

  editForm() {
    if (this.edit == false) {
      this.edit = true;
    }
    else  {
      this.edit = false;
    }
    
  }
}
