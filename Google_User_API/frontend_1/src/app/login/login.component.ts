import { Component } from '@angular/core';
import { environment } from '../environments/environments';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  googleSignInUrl = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${environment.googleCallbackUri}&prompt=consent&response_type=code&client_id=${environment.googleClientId}&scope=openid%20email%20profile&access_type=offline`;
}
