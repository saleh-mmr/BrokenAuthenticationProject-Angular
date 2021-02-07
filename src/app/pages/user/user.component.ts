import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../services/api.service';
import {NewUserCreatedComponent} from '../new-user-created/new-user-created.component';
import {MatSnackBar} from '@angular/material/snack-bar';
// import {NewUserCreatedComponent} from '../new-user-created-component/new-user-created-component.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  flag0 = false;
  flag1 = false;
  signinForm: FormGroup;
  signupForm: FormGroup;
  durationInSeconds = 5;

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private formBuilder: FormBuilder, private auth: AuthenticationService, private router: Router, private api: ApiService) {
    this.signinForm = this.formBuilder.group({
      username : ['', [Validators.required]],
      password : ['', [Validators.required]]
    });
    this.signupForm = this.formBuilder.group({
      user : ['', [Validators.required]],
      pass : ['', [Validators.required]],
      cpassword : ['', [Validators.required]]

    });
  }
  ngOnInit(): void {
    AOS.init();
  }

  turnToSignIn(): void {
    this.flag0 = true;
    this.flag1 = false;
  }
  turnToSignUp(): void {
    this.flag1 = true;
    this.flag0 = false;
  }
  // tslint:disable-next-line:typedef
  signin(){
    if (this.signinForm.invalid){
      console.log('Something might be wrong!');
    }
    else {
      this.auth.login(this.signinForm.value).subscribe(data => {
        if (data.access){
          this.router.navigate(['/profile']);
        }
      });
    }
  }

  // tslint:disable-next-line:typedef
  openSnackBar() {
    this._snackBar.openFromComponent(NewUserCreatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  // tslint:disable-next-line:typedef
  signup(){
    if (this.signupForm.invalid){
      console.log('Something might be wrong!');
    }
    else {
      console.log(this.signupForm.value);
      this.api.signup(this.signupForm.value).subscribe(data => {
        console.log(data);
      });
      this.signupForm.controls.user.setValue('');
      this.signupForm.controls.pass.setValue('');
      this.signupForm.controls.cpassword.setValue('');
      this.openSnackBar();

    }
  }
}
