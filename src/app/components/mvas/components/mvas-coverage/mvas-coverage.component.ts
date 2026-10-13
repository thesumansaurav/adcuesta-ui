import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Operator {
  name: string;
  color: string;
}

export interface CountryCoverage {
  code: string;
  name: string;
  flag: string;
  region: string;
  operators: Operator[];
}

@Component({
  selector: 'app-mvas-coverage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mvas-coverage.component.html',
  styleUrl: './mvas-coverage.component.scss'
})
export class MvasCoverageComponent {
  countries: CountryCoverage[] = [
    {
      code: 'AE',
      name: 'United Arab Emirates',
      flag: '🇦🇪',
      region: 'Middle East',
      operators: [{ name: 'Etisalat', color: '#00A19A' }]
    },
    {
      code: 'IQ',
      name: 'Iraq',
      flag: '🇮🇶',
      region: 'Middle East',
      operators: [{ name: 'Zain', color: '#7B2D8E' }]
    },
    {
      code: 'VN',
      name: 'Vietnam',
      flag: '🇻🇳',
      region: 'Southeast Asia',
      operators: [{ name: 'Viettel', color: '#0066B3' }]
    },
    {
      code: 'PH',
      name: 'Philippines',
      flag: '🇵🇭',
      region: 'Southeast Asia',
      operators: [{ name: 'Smart', color: '#F47B20' }]
    },
    {
      code: 'SA',
      name: 'Saudi Arabia',
      flag: '🇸🇦',
      region: 'Middle East',
      operators: [{ name: 'Mobily', color: '#00A0E0' }]
    },
    {
      code: 'FR',
      name: 'France',
      flag: '🇫🇷',
      region: 'Europe',
      operators: [
        { name: 'Orange', color: '#FF7900' },
        { name: 'SFR', color: '#E60000' },
        { name: 'Bouygues', color: '#1B2C7A' }
      ]
    },
    {
      code: 'DE',
      name: 'Germany',
      flag: '🇩🇪',
      region: 'Europe',
      operators: [{ name: 'O2', color: '#007CB0' }]
    }
  ];

  topCountries = this.countries.slice(0, 4);
  bottomCountries = this.countries.slice(4);
}
