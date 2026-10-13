import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PillarItem {
  number: string;
  title: string;
  detail: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-mvas-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mvas-about.component.html',
  styleUrl: './mvas-about.component.scss'
})
export class MvasAboutComponent {
  pillars: PillarItem[] = [
    { number: '01', title: 'Think in intelligence', detail: 'We start with the model, then shape the product around a real human need.', icon: 'fa-solid fa-brain', color: '#1f4a97' },
    { number: '02', title: 'Make it useful', detail: 'Every AI feature has a job: help someone learn, create, decide, or enjoy.', icon: 'fa-solid fa-wand-magic-sparkles', color: '#ff682b' },
    { number: '03', title: 'Design for reach', detail: 'Mobile-first experiences built to travel across markets and networks.', icon: 'fa-solid fa-earth-americas', color: '#00A19A' },
    { number: '04', title: 'Improve continuously', detail: 'Products learn from every interaction and become more helpful over time.', icon: 'fa-solid fa-diagram-project', color: '#fec15c' }
  ];

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
