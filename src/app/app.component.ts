import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dilx';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollPoint = 100; // The scroll position at which the class should be added
    const navbar = this.el.nativeElement;

    if (offset > scrollPoint) {
      this.renderer.addClass(navbar, 'scrolled');
    } else {
      this.renderer.removeClass(navbar, 'scrolled');
    }
  }
}
