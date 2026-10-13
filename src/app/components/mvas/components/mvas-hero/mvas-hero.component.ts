import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface HeroNode {
  label: string;
  sub: string;
  positionClass: string;
  color: string;
  screenshot: string;
}

export interface HeroStat {
  icon: string;
  value: string;
  sub: string;
}

@Component({
  selector: 'app-mvas-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mvas-hero.component.html',
  styleUrl: './mvas-hero.component.scss'
})
export class MvasHeroComponent {
  nodes: HeroNode[] = [
    {
      label: 'Learn',
      sub: 'Adaptive AI',
      positionClass: 'node-top-left',
      color: '#1f4a97',
      screenshot: '/images/products/pixora-screenshot.webp'
    },
    {
      label: 'Play',
      sub: 'Smart content',
      positionClass: 'node-top-right',
      color: '#ff682b',
      screenshot: '/images/products/playcade-screenshot.webp'
    },
    {
      label: 'Create',
      sub: 'Generative stories',
      positionClass: 'node-bottom-left',
      color: '#00A19A',
      screenshot: '/images/products/kid-console-screenshot.webp'
    },
    {
      label: 'Personalize',
      sub: 'Voice + memory',
      positionClass: 'node-bottom-right',
      color: '#fec15c',
      screenshot: '/images/products/ninidreamland-screenshot.webp'
    }
  ];

  stats: HeroStat[] = [
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      value: 'AI-first',
      sub: 'Product thinking'
    },
    {
      icon: 'fa-solid fa-globe',
      value: '7 Markets',
      sub: 'Live distribution'
    },
    {
      icon: 'fa-solid fa-bolt',
      value: '4 Products',
      sub: 'In the portfolio'
    }
  ];

  scrollToSection(id: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
