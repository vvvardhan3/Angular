import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-google-call-back',
  imports: [],
  templateUrl: './google-call-back.component.html',
  styleUrl: './google-call-back.component.css'
})
export class GoogleCallBackComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.http.post('http://localhost:8000/api/v1/auth/google/', { code })
          .subscribe({
            next: (data) => {
              console.log(data);
              this.router.navigate(['/']);
            },
            error: (error) => {
              console.error('Error:', error);
              throw new Error('Bad request');
            }
          });
      } else {
        console.log('Not Found');
        throw new Error('Not Found');
      }
    });
  }

}
