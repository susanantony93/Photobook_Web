import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServiceService } from '../sevice/all-service.service';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public form: FormGroup;
  public formData: any
  public isFormSubmited = false;
  public currentUser;
  public requiremenFormArray = [];
  public schedule = [{ "date": "", "from": "", "to": "" }];
  constructor(public fb: FormBuilder, public fbb: FormBuilder, private router: Router, private all: AllServiceService) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('\n current USer : ', this.currentUser._id);
    let requirementArry = [];
    if (this.currentUser.requirement && this.currentUser.requirement.length > 0) {
      let requirementArr = this.currentUser.requirement;
      requirementArr.forEach(ele => {
        let obj = this.createReq(ele.date, ele.from, ele.to);
        requirementArry.push(obj);
        this.requiremenFormArray.push({ date: ele.date, from: ele.from, to: ele.to });
      });
    } else {
      let obj = this.createReq();
      requirementArry.push(obj);
      this.requiremenFormArray.push({ date: '', from: '', to: '' });
    }
    this.formData = {
      name: this.currentUser.name ? this.currentUser.name : '',
      country: this.currentUser.country ? this.currentUser.country : '',
      experience: this.currentUser.experience ? this.currentUser.experience : '',
      expertise: this.currentUser.expertise ? this.currentUser.expertise : '',
      language_skills: this.currentUser.language_skills ? this.currentUser.language_skills : '',
      photography_equipments: this.currentUser.photography_equipments ? this.currentUser.photography_equipments : '',
      personal_website: this.currentUser.personal_website ? this.currentUser.personal_website : '',
      charge_per_hour: this.currentUser.charge_per_hour ? this.currentUser.charge_per_hour : '',
      fb_url: this.currentUser.fb_url ? this.currentUser.fb_url : '',
      insta_url: this.currentUser.insta_url ? this.currentUser.insta_url : '',
      twitter_url: this.currentUser.twitter_url ? this.currentUser.twitter_url : '',
      requirement: this.requiremenFormArray
    }

    console.log('\n formData : ', this.formData);
    const pattern = new RegExp('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,5})$');
    this.form = this.fb.group({
      'name': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'experience': new FormControl('', Validators.required),
      'expertise': new FormControl('', Validators.required),
      'language_skills': new FormControl('', Validators.required),
      'photography_equipments': new FormControl('', Validators.required),
      'personal_website': new FormControl(''),
      'charge_per_hour': new FormControl('', Validators.required),
      'fb_url': new FormControl(''),
      'insta_url': new FormControl(''),
      'twitter_url': new FormControl(''),
      'requirement': this.fb.array(requirementArry)
    });
  }

  createReq(date = '', from = '', to = '') {
    // return this.form.get('requirement') as FormArray;
    return this.fb.group({
      date: [date],
      from: [from],
      to: [to]
    });
  }


  ngOnInit() {
  }

  submit(form) {
    this.isFormSubmited = true;
    // this.formData = form.value;
    this.formData.user_id = this.currentUser._id;
    if (form.valid) {
      try {
        console.log('\n this.formadata : ', this.formData);
        this.all.post('user/profile', this.formData).subscribe((res) => {
          console.log('\n res : ', res);
          this.isFormSubmited = false;
          this.formData = {};
          let data = res['data'];
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.router.navigate(['/dashboard']);
        }, (err) => {
          err = err.error;
          console.log('\n Err : ', err);
          // this.alerts.push({ type: 'danger', msg: err['message'], 'timeout': 5000 })
        });

      } catch (e) {
        console.log('\n Err : ', e);
      }

    }
    else {
      console.log('in error');
    }
  }


  addMore() {
    (this.form.controls['requirement'] as FormArray).push(this.createReq());
    this.requiremenFormArray.push({ date: '', from: '', to: '' });
    this.formData.requirement = this.requiremenFormArray;
  }

  remove(index) {
    (this.form.controls['requirement'] as FormArray).removeAt(index);
    this.requiremenFormArray.splice(index, 1);
    this.formData.requirement = this.requiremenFormArray;
  }

  profileImageEdit() {
    console.log("here");
    document.getElementById('profileupload').click();
    return false;
  }

  get reqAvail() { return this.form.controls['requirement'] as FormArray; }
}
