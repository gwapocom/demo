import { Component } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  template: `
  <div class="container w-25 vh-100">
    <div class="row justify-content-center h-100">
        <div class="card my-auto shadow">
            <div class="card-body p-5">
                <div class="text-center">
                    <fa-icon [icon]="faLock" class="fa-3x"></fa-icon>
                </div>
                <div class="text-center">
                    <h2>Forgot Password</h2>
                </div>
                <p style="color: lightslategray;">Please enter your registered email where<br> we will send you the reset password link</p>
                <form action="" method="">
                    <div class="form-group mt-3">
                        <input type="email" id="email" placeholder="Email Address" class="form-control" name="" />
                    </div>
                    <input type="submit" class="mt-3 btn btn-primary w-100" value="Reset Password Link" name="">
                </form>
            </div>
            <div class="card-footer text-right">
                <small>Ohh I remember <a routerLink="../login">Back to Login</a></small>
            </div>
        </div>
    </div>
</div>
  `,
  styles: ``
})
export class ForgotPasswordComponent {
faLock = faLock;
}
