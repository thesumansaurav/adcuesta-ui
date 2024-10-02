import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
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

}

