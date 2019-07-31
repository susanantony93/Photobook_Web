//Most work in this file from Luke Andrews

//Importing files
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServiceService} from '../sevice/all-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  //initializing variables
  public resError;
  public form: FormGroup;
  public formData: any
  public isFormSubmited = false; //
  constructor(public fb: FormBuilder, private router:Router, private all:AllServiceService) {
    this.formData = {};
    
    //email pattern for username
    const pattern = new RegExp('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,5})$');
    
    this.form = this.fb.group({
      'username': new FormControl('', Validators.compose([Validators.required, Validators.pattern(pattern)])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    });
  }

  //no changes needed
  ngOnInit() {
  }

  //triggered when user submits login form
  login(isvalid) {
    this.isFormSubmited = true;
    //ensuring form data is valid
    if (isvalid) {
      //calls login route      
      this.all.post('login', this.formData).subscribe((res) => {        
        this.formData = {}; //reset form data   
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('currentUser', JSON.stringify(res)); //sets current user in localstorage       
        this.router.navigate(['/dashboard']).then(() => {
          window.location.reload();
        }); //navigates user to their dashboard
        
      }, (err) => {
        //if there's an error, show the error
        
        this.resError = err.error;
        console.log(err.error); //log err in console
      });
    }
  }

}
