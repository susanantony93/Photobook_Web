import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServiceService } from '../sevice/all-service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public isBeforeSignup = true;
  public form: FormGroup;
  public formData: any
  public isFormSubmited = false;
  public user_role: String;
  constructor(public fb: FormBuilder, private router:Router, private all:AllServiceService) {
    this.formData = {};
    const pattern = new RegExp('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,5})$');
    this.form = this.fb.group({
      'name': new FormControl('', Validators.compose([Validators.required,this.noWhitespaceValidator])),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.pattern(pattern)])),
      'phone': new FormControl('', Validators.compose([Validators.required, Validators.pattern("[0-9]{10}")])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'cpassword': new FormControl('', Validators.compose([Validators.required])),
    }, {
        validator: [this.passwordMatchValidator]
      });
  }

  noWhitespaceValidator(control: FormControl) {
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : { 'required': true }
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('cpassword').value ? null : g.get('cpassword').setErrors({ 'mismatch': true });
  }

  signup(isvalid) {
    this.isFormSubmited = true;
    // this.alerts = [];
    if (isvalid) {
      this.formData['user_role'] = this.user_role ? this.user_role : "user";
      console.log("formData:", this.formData);
      this.all.post('user/sign-up', this.formData).subscribe((res) => {
        this.isFormSubmited = false;
        this.formData = {};
        localStorage.setItem('currentUser', JSON.stringify(res));
        this.router.navigate(['/login']);
      }, (err) => {
        err = err.error;
        console.log('\n Err : ',err);
        // this.alerts.push({ type: 'danger', msg: err['message'], 'timeout': 5000 })
      });
    }

  }

  ngOnInit() {
  }

  change(role: String){
    this.user_role = role;
    this.isBeforeSignup = false;
  }

}
