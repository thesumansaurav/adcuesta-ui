import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Operator {
  name: string;
  color: string;
}

export interface CountryCoverage {
  code: string;
  name: string;
  region: string;
  operators: Operator[];
}

export interface RegionGroup {
  name: string;
  tone: 'primary' | 'accent' | 'gold';
}

export interface GlobePin {
  code: string;
  x: number;
  y: number;
  color: string;
}

@Component({
  selector: 'app-mvas-coverage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mvas-coverage.component.html',
  styleUrl: './mvas-coverage.component.scss'
})
export class MvasCoverageComponent {
  hovered: string | null = null;

  countries: CountryCoverage[] = [
    { code: 'AE', name: 'United Arab Emirates', region: 'Middle East', operators: [{ name: 'Etisalat', color: '#00A19A' }] },
    { code: 'IQ', name: 'Iraq', region: 'Middle East', operators: [{ name: 'Zain', color: '#7B2D8E' }] },
    { code: 'VN', name: 'Vietnam', region: 'Southeast Asia', operators: [{ name: 'Viettel', color: '#0066B3' }] },
    { code: 'PH', name: 'Philippines', region: 'Southeast Asia', operators: [{ name: 'Smart', color: '#F47B20' }] },
    { code: 'SA', name: 'Saudi Arabia', region: 'Middle East', operators: [{ name: 'Mobily', color: '#00A0E0' }] },
    {
      code: 'FR',
      name: 'France',
      region: 'Europe',
      operators: [
        { name: 'Orange', color: '#FF7900' },
        { name: 'SFR', color: '#E60000' },
        { name: 'Bouygues', color: '#1B2C7A' }
      ]
    },
    { code: 'DE', name: 'Germany', region: 'Europe', operators: [{ name: 'O2', color: '#007CB0' }] }
  ];

  regions: RegionGroup[] = [
    { name: 'Middle East', tone: 'primary' },
    { name: 'Southeast Asia', tone: 'accent' },
    { name: 'Europe', tone: 'gold' }
  ];

  pins: GlobePin[] = [
    { code: 'AE', x: 160, y: 110, color: '#00A19A' },
    { code: 'IQ', x: 175, y: 130, color: '#1f4a97' },
    { code: 'VN', x: 270, y: 140, color: '#007cff' },
    { code: 'PH', x: 285, y: 165, color: '#ff682b' },
    { code: 'SA', x: 180, y: 115, color: '#00A19A' },
    { code: 'FR', x: 195, y: 95, color: '#ff682b' },
    { code: 'DE', x: 210, y: 90, color: '#007cff' }
  ];

  byRegion(region: string): CountryCoverage[] {
    return this.countries.filter(c => c.region === region);
  }

  flagUrl(code: string): string {
    return `https://flagcdn.com/w80/${code.toLowerCase()}.png`;
  }

  setHovered(code: string | null): void {
    this.hovered = code;
  }
}
