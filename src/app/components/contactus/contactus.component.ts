import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  subscribeForm: any;
  constructor(private fb: FormBuilder, private http: HttpClient,private toastr: ToastrService) {}

  ngOnInit() {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]],
      subject: ['', [Validators.required]]
    });
  }

    onSubmit() {
        console.log("clicked")
        const url = "https://formsubmit.co/ajax/e73656bb397690c73a582fc96e0f8558";
        const data = {
          email: this.subscribeForm.value.email,
          name : this.subscribeForm.value.name,
          phone : this.subscribeForm.value.phone,
          subject:this.subscribeForm.value.subject,
          message:this.subscribeForm.value.message
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
            this.toastr.success('Thank you for reaching out. We will connect with you soon.Stay tuned !');
          }
          // You can handle the response here, e.g., show a success message
        });
    
      }

}
