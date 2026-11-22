import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ArchitectureLayer {
  number: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  points: string[];
}

@Component({
  selector: 'app-mvas-architecture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mvas-architecture.component.html',
  styleUrl: './mvas-architecture.component.scss'
})
export class MvasArchitectureComponent {
  flow = [
    { label: 'Sense', color: '#1f4a97' },
    { label: 'Reason', color: '#ff682b' },
    { label: 'Create', color: '#00A19A' },
    { label: 'Learn', color: '#fec15c' }
  ];

  layers: ArchitectureLayer[] = [
    {
      number: '01',
      name: 'Connected Distribution',
      tagline: '',
      description: 'The reach that brings intelligent products to people',
      icon: 'fa-solid fa-tower-broadcast',
      color: '#1f4a97',
      points: ['DCB Gateway', 'SMS Gateway', 'USSD Gateway']
    },
    {
      number: '02',
      name: 'Adcuesta AI Core',
      tagline: '',
      description: 'Models, workflows, memory, and product logic',
      icon: 'fa-solid fa-cubes',
      color: '#ff682b',
      points: ['Subscription Engine', 'Billing Manager', 'Content CMS']
    },
    {
      number: '03',
      name: 'Intelligent Experiences',
      tagline: '',
      description: 'Products that learn, create, and respond',
      icon: 'fa-solid fa-table-cells-large',
      color: '#00A19A',
      points: ['Pixora — AI Learning', 'Playcade — Gaming', 'Kid-Console — Kids Content']
    },
    {
      number: '04',
      name: 'Learning Loop',
      tagline: '',
      description: 'Signals that make every experience smarter',
      icon: 'fa-solid fa-chart-column',
      color: '#fec15c',
      points: ['Real-time Dashboards', 'Revenue Reports', 'Churn Analytics']
    }
  ];
}
