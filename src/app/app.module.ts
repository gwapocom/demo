import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { NotFoundComponent } from './not-found/not-found.component';
import { routingComponents } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
