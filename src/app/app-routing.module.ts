import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import {AuthGuardService as AuthGuard} from './auth-guard.service';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  ForgotPasswordComponent,
  NotFoundComponent
];
