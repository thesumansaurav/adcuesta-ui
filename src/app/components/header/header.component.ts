import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  constructor(private router: Router) {
  }

  isHomePage(): boolean {
    return this.router.url === '/';  // Adjust this if your home route is different
  }

  // HostListener listens for the scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Get the scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add or remove class based on scroll position
    this.isScrolled = scrollTop > 100; // 100 can be adjusted based on the desired scroll distance
  }
}
