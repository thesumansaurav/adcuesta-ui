import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatItem {
  value: string;
  suffix: string;
  titlePrefix: string;
  titleSuffix: string;
  sub: string;
  colorGradient: string;
}

@Component({
  selector: 'app-mvas-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mvas-stats.component.html',
  styleUrl: './mvas-stats.component.scss'
})
export class MvasStatsComponent {
  stats: StatItem[] = [
    {
      value: '7',
      suffix: '',
      titlePrefix: 'Countries',
      titleSuffix: 'Live',
      sub: '',
      colorGradient: 'linear-gradient(0deg, #ff5d06, #ffc806 50%)'
    },
    {
      value: '9',
      suffix: '',
      titlePrefix: 'Telco',
      titleSuffix: 'Partners',
      sub: '',
      colorGradient: 'linear-gradient(0deg, #862ff1, #163fae 50%)'
    },
    {
      value: '50',
      suffix: 'M+',
      titlePrefix: 'Subscribers',
      titleSuffix: 'Reached',
      sub: '',
      colorGradient: 'linear-gradient(0deg, #d406b7, #fc1a66 50%)'
    },
    {
      value: '4',
      suffix: '',
      titlePrefix: 'Products in',
      titleSuffix: 'Portfolio',
      sub: '',
      colorGradient: 'linear-gradient(0deg, #58f106, #23c10e 50%)'
    }
  ];
}
