import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CapabilityItem {
  number: string;
  title: string;
  detail: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-mvas-capabilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mvas-capabilities.component.html',
  styleUrl: './mvas-capabilities.component.scss'
})
export class MvasCapabilitiesComponent {
  capabilities: CapabilityItem[] = [
    {
      number: '01',
      title: 'AI product strategy',
      detail: 'From first prompt to a product people use.',
      icon: 'fa-solid fa-brain',
      color: '#1f4a97'
    },
    {
      number: '02',
      title: 'Personalized experiences',
      detail: 'Every user gets a smarter next step.',
      icon: 'fa-solid fa-wand-magic-sparkles',
      color: '#007cff'
    },
    {
      number: '03',
      title: 'Generative content',
      detail: 'Stories, lessons, and worlds made in seconds.',
      icon: 'fa-solid fa-wand-magic',
      color: '#ff682b'
    },
    {
      number: '04',
      title: 'Voice & multimodal',
      detail: 'Interfaces that listen, see, and respond.',
      icon: 'fa-solid fa-microphone-lines',
      color: '#00A19A'
    },
    {
      number: '05',
      title: 'Reliable AI foundations',
      detail: 'Data, models, and delivery built to scale.',
      icon: 'fa-solid fa-database',
      color: '#fec15c'
    },
    {
      number: '06',
      title: 'Operator distribution',
      detail: 'Take intelligent products to real markets.',
      icon: 'fa-solid fa-diagram-project',
      color: '#1f4a97'
    }
  ];
}
