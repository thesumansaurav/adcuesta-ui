import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('parallaxScene', { static: false }) parallaxScene!: ElementRef;

  ngAfterViewInit() {
    if (this.parallaxScene) {
      const parallaxInstance = new Parallax(this.parallaxScene.nativeElement);
    }
  }
}

