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
  layers: ArchitectureLayer[] = [
    {
      number: 'Layer 01',
      name: 'Data & Signal Layer',
      tagline: 'Contextual Subscriber Understanding',
      description: 'Captures real-time subscriber interactions and operator telemetry to build contextual intelligence while strictly honoring data privacy.',
      icon: 'fa-solid fa-tower-broadcast',
      color: '#1f4a97',
      points: [
        'Telecom telemetry & carrier signal ingestion',
        'Privacy-first behavioral session graphs',
        'Local network latency & handset capability profiling'
      ]
    },
    {
      number: 'Layer 02',
      name: 'Orchestration & Models Layer',
      tagline: 'Multi-Model Intelligence Engine',
      description: 'Adaptive AI routing layer that dynamically selects the optimal model based on task nuance, regional dialect, and latency constraints.',
      icon: 'fa-solid fa-microchip',
      color: '#ff682b',
      points: [
        'Dynamic model switching (fine-tuned & foundation)',
        'Real-time prompt synthesis & dialect localization',
        'Strict content safety guardrails & output verification'
      ]
    },
    {
      number: 'Layer 03',
      name: 'Delivery & Billing Layer',
      tagline: 'Carrier-Grade Distribution',
      description: 'Frictionless distribution straight to subscriber devices, deeply integrated with Direct Carrier Billing (DCB) engines.',
      icon: 'fa-solid fa-credit-card',
      color: '#00A19A',
      points: [
        'Direct Carrier Billing (DCB) single-click payment flows',
        'Edge caching & sub-50ms localized regional delivery',
        'Real-time fraud prevention & subscription lifecycle sync'
      ]
    }
  ];
}
