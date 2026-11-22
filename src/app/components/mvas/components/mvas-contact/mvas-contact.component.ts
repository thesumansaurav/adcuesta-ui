import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-mvas-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './mvas-contact.component.html',
  styleUrl: './mvas-contact.component.scss'
})
export class MvasContactComponent {
  form = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  submitted = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.form.name && this.form.email && this.form.message) {
      const url = 'https://formsubmit.co/ajax/e73656bb397690c73a582fc96e0f8558';
      const payload = {
        name: this.form.name,
        email: this.form.email,
        company: this.form.company || 'Not specified',
        message: this.form.message,
        _subject: 'New VAS Partnership Inquiry from mVAS Page'
      };

      this.http.post(url, payload, { responseType: 'json' }).pipe(
        catchError(error => {
          console.error('Submission error:', error);
          return of(null);
        })
      ).subscribe(() => {
        this.submitted = true;
        setTimeout(() => {
          this.submitted = false;
          this.form = {
            name: '',
            email: '',
            company: '',
            message: ''
          };
        }, 5000);
      });
    }
  }
}
