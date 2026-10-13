import { Component } from '@angular/core';
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
  products: ProductItem[] = [
    {
      id: 'pixora',
      name: 'Pixora',
      category: 'AI / EdTech',
      tagline: 'AI Explorer Academy',
      description: 'Interactive AI-powered micro-lessons that adapt dynamically to each young learner\'s curiosity, pacing, and learning style.',
      audience: 'Children 5–12, Parents, Schools',
      screenshot: '/images/products/pixora-screenshot.webp',
      accentColor: '#1f4a97',
      features: [
        'Adaptive AI learning engine',
        'Personalized child pacing',
        'Safe, moderated environment'
      ]
    },
    {
      id: 'storysparks',
      name: 'StorySparks',
      category: 'AI / Family',
      tagline: 'Generative Bedtime Stories',
      description: 'Personalized interactive bedtime tales co-created with parents and children, turning everyday moments into imaginative journeys.',
      audience: 'Families, Young Children',
      screenshot: '/images/products/ninidreamland-screenshot.webp',
      accentColor: '#ff682b',
      features: [
        'Real-time story generation',
        'Custom illustration style',
        'Audio read-aloud support'
      ]
    },
    {
      id: 'speakwise',
      name: 'SpeakWise',
      category: 'AI / Language',
      tagline: 'Conversational Fluency Coach',
      description: 'Real-time conversational language practice with instant AI feedback on grammar, pronunciation, and vocabulary across 20+ dialects.',
      audience: 'Language Learners, Professionals',
      screenshot: '/images/products/kid-console-screenshot.webp',
      accentColor: '#00A19A',
      features: [
        'Voice recognition & feedback',
        '20+ languages & regional accents',
        'Contextual situational roleplay'
      ]
    },
    {
      id: 'mindpulse',
      name: 'MindPulse',
      category: 'AI / Micro-Learning',
      tagline: 'Daily Cognitive Micro-Workouts',
      description: 'Bite-sized mental fitness challenges and personalized brain puzzles designed to keep sharp minds active in under 3 minutes a day.',
      audience: 'Telecom Subscribers, Busy Adults',
      screenshot: '/images/products/playcade-screenshot.webp',
      accentColor: '#7B2D8E',
      features: [
        '3-minute daily challenge loops',
        'Adaptive difficulty progression',
        'Gamified carrier reward sync'
      ]
    }
  ];
}
