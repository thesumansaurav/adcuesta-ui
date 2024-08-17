import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public router:Router){
    console.log(this.router.url)

  }

  // ngOnInit(){
  //   console.log(this.router.url)
  // }

  isScrolled = false;


  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);  // Ensure the page scrolls to the top on route change
      this.checkScrollPosition(); // Re-check scroll position after scrolling to top
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  private checkScrollPosition() {
    this.isScrolled = window.scrollY > 50;
  }

  

}
