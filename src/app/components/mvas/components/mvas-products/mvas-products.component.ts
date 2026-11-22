import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  audience: string;
  screenshot: string;
  accentColor: string;
  status: 'live' | 'coming-soon';
  features: string[];
}

@Component({
  selector: 'app-mvas-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mvas-products.component.html',
  styleUrl: './mvas-products.component.scss'
})
export class MvasProductsComponent {
  selected: ProductItem | null = null;

  open(product: ProductItem): void {
    this.selected = product;
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.selected = null;
  }

  products: ProductItem[] = [
    {
      id: 'pixora',
      name: 'Pixora',
      category: 'AI / EdTech',
      tagline: 'AI Explorer Academy',
      description: 'An AI-powered learning platform that delivers interactive educational content for kids and young learners. Personalized learning paths, gamified lessons, and adaptive curriculums designed to engage and educate through mobile-first experiences.',
      audience: 'Kids & Young Learners',
      screenshot: '/images/products/pixora-screenshot.webp',
      accentColor: '#1f4a97',
      status: 'live',
      features: ['AI-adaptive learning paths', 'Gamified lesson modules', 'Multi-subject curriculum', 'Progress tracking for parents']
    },
    {
      id: 'playcade',
      name: 'Playcade',
      category: 'AI / Gaming',
      tagline: 'Mobile Gaming Arcade',
      description: 'A subscription-based mobile gaming arcade offering hundreds of premium HTML5 games. No downloads required — instant play directly in the browser. Casual, arcade, puzzle, and action genres with regular content updates and leaderboards.',
      audience: 'All Ages',
      screenshot: '/images/products/playcade-screenshot.webp',
      accentColor: '#ff682b',
      status: 'live',
      features: ['Hundreds of HTML5 games', 'No download — instant play', 'Multiple game genres', 'Leaderboards & achievements']
    },
    {
      id: 'kid-console',
      name: 'Kid-Console',
      category: 'AI / Kids Content',
      tagline: 'Safe Kids Entertainment',
      description: 'A curated, child-safe entertainment platform featuring nursery rhymes, cartoons, educational videos, and interactive stories. Parental controls, age-appropriate content filtering, and a walled-garden approach trusted by telecom operators.',
      audience: 'Children 2–8',
      screenshot: '/images/products/kid-console-screenshot.webp',
      accentColor: '#fec15c',
      status: 'live',
      features: ['Curated child-safe content', 'Parental controls & timers', 'Age-appropriate filtering', 'Nursery rhymes & cartoons']
    },
    {
      id: 'ninidreamland',
      name: 'Ninidreamland',
      category: 'AI / Bedtime Stories',
      tagline: 'AI Bedtime Story Generator',
      description: 'An AI-powered bedtime story platform that generates personalized, calming stories for children. Each story is uniquely crafted with the child\'s name, favorite characters, and preferred themes. Features text-to-speech narration, soothing background sounds, and a dreamy, sleep-friendly interface designed for nighttime use.',
      audience: 'Children 3–10',
      screenshot: '/images/products/ninidreamland-screenshot.webp',
      accentColor: '#1f4a97',
      status: 'coming-soon',
      features: ['AI-generated personalized stories', 'Text-to-speech narration', 'Soothing background sounds', 'Custom characters & themes']
    }
  ];
}
