import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  subscribeForm: any;
  constructor(private fb: FormBuilder, private http: HttpClient,private toastr: ToastrService) {}

  ngOnInit() {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Handle form submission
  onSubmit() {
    console.log("clicked")
    const url = "https://formsubmit.co/ajax/e73656bb397690c73a582fc96e0f8558";
    const data = {
      email: this.subscribeForm.value.email
    };

    this.http.post(url, data, { responseType: 'json' }).pipe(
      catchError(error => {
        console.error('There was an error!', error);
        return of(null); // Handle the error gracefully
      })
    ).subscribe((response:any) => {
      console.log('Response:', response);
      if(response.success == 'true') {
        this.subscribeForm.reset();
        this.toastr.success('You have successfully subscribed to our newsletters.Thank you !');
      }
      // You can handle the response here, e.g., show a success message
    });

  }
}
