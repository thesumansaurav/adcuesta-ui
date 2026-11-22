import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isServicesOpen = false;
  isMobileServicesOpen = false;

  private router = inject(Router);
  private elementRef = inject(ElementRef);

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isServicesOpen = false;
      this.isMobileServicesOpen = false;
    });
  }

  isHomePage(): boolean {
    return this.router.url === '/' || this.router.url === '';
  }

  isServicesActive(): boolean {
    const url = this.router.url;
    return url.startsWith('/digitalmarketing') || url.startsWith('/mvas');
  }

  toggleServices(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isServicesOpen = !this.isServicesOpen;
  }

  toggleMobileServices(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isMobileServicesOpen = !this.isMobileServicesOpen;
  }

  closeServices() {
    this.isServicesOpen = false;
    this.isMobileServicesOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isServicesOpen || this.isMobileServicesOpen) {
      const target = event.target as HTMLElement;
      if (!this.elementRef.nativeElement.querySelector('.nav-item.dropdown')?.contains(target)) {
        this.isServicesOpen = false;
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 100;
  }
}
