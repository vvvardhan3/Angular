import { Routes } from '@angular/router';
import { GoogleCallBackComponent } from './google-call-back/google-call-back.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {path: '',  redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'auth', component: GoogleCallBackComponent}
];
