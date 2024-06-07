import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
<div class="container w-25 vh-100">
    <div class="row justify-content-center h-100">
        <div class="card my-auto shadow">
            <div class="card-body px-5">
                <div class="text-center">
                    <fa-icon [icon]="faLock" class="fa-3x"></fa-icon>
                </div>
                <div class="text-center">
                    <h2>Welcome</h2>
                </div>
                <p style="color: lightslategray; text-align: center;">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please enter your login
                    details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <form [formGroup]=loginForm (ngSubmit)="onSubmit()">
                    <div class="form-group mt-3">
                        <input type="email" id="email" placeholder="Email" class="form-control" formControlName="email"
                            name="email" />
                    </div>
                    <div class="form-group mt-3">
                        <input type="password" id="password" placeholder="Password" class="form-control"
                            formControlName="password" name="password" />
                    </div>
                    <input type="submit" class="mt-3 btn btn-primary w-100" value="Login" name="">
                </form>
            </div>
            <div class="card-footer text-center">
                <small><a routerLink="../forgot-password">Forgot Password</a></small>
            </div>
        </div>
    </div>
</div>
  `,

  styles: ``
})

export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
