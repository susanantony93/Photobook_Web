//Most work in this file done by Luke Andrews

//Importing files
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServiceService } from '../sevice/all-service.service';


@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {
  public edit = false;
  user
  public form: FormGroup;
  public formData: any
  public isFormSubmited = false;

  constructor(public fb: FormBuilder, private router: Router, private all: AllServiceService) {
    this.formData = {};
    this.form = this.fb.group({
      'usersName': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'usersEmail': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    });
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.formData.usersEmail = this.user.email;
    this.formData.usersName = this.user.name;
  }
  ngOnInit() {
  }
  saveChanges() {

    //calls route for updating user
    this.formData._id = this.user._id;
    this.all.post('updateUser', this.formData).subscribe((res) => {        //route for updatae
      this.formData = {}; //reset form data        
      localStorage.setItem('currentUser', JSON.stringify(res)); //sets current user in localstorage       
      this.user = JSON.parse(localStorage.getItem('currentUser')); //updates current user for this page
      this.edit = false;
    }, (err) => {
      //if there's an error, show the error
      this.formData = {}; //reset form data        
      console.log(err.error); //log err in console
    });

  }
  editForm() {
    if (this.edit == false) {
      this.edit = true;
    }
    else {
      this.edit = false;
    }

  }
}
