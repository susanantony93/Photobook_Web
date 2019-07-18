import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public formData: any
  public isFormSubmited = false;
  constructor(public fb: FormBuilder, private router:Router) {
    this.formData = {};
    const pattern = new RegExp('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,5})$');
    this.form = this.fb.group({
      'username': new FormControl('', Validators.compose([Validators.required, Validators.pattern(pattern)])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    });
  }

  ngOnInit() {
  }

  login(isvalid) {
    this.isFormSubmited = true;
    if (isvalid) {
      this.router.navigate(['/dashboard']);
    }
  }

}
