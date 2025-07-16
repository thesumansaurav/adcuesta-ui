import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, AfterViewInit, ViewChild, OnInit, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { NgwWowModule, NgwWowService } from 'ngx-wow';
import Parallax from 'parallax-js';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, RouterModule, CommonModule, HttpClientModule ,FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
  subscribeForm: any;
  private http = inject(HttpClient);
  private toastr = inject(ToastrService);
  private fb = inject(FormBuilder);
  constructor(private wowService: NgwWowService) {
  }

  ngOnInit() {
    if (window.innerWidth > 768) {  // Adjust the width threshold as needed
      this.wowService.init();  // Initialize wowService only for screens wider than 768px
    }
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  reset() {
    this.wowService.init();
  }

  @ViewChild('parallaxScene', { static: false }) parallaxScene!: ElementRef;
  @ViewChild('parallaxScene2', { static: false }) parallaxScene2!: ElementRef;

  ngAfterViewInit() {
    if (this.parallaxScene) {
      const parallaxInstance = new Parallax(this.parallaxScene.nativeElement);
    }
    if (this.parallaxScene2) {
      const parallaxInstance = new Parallax(this.parallaxScene2.nativeElement);
    }
  }

  customOptions: OwlOptions = {
    loop: false,
    margin:30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
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

