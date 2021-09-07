import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  categories: string[] = [
    'Music',
    'Visual Arts',
    'Performing Arts',
    'Film',
    'Lectures & Books',
    'Fashion',
    'Food & Drink',
    'Festivals & Fairs',
    'Charities',
    'Sports & Active Life',
    'Nightlife',
    'Kids & Family',
    'Conferences',
    'seminar',
    'Workshops',
    'classes',
    'VIP experiences',
    'Sponsorships',
    'Trade shows and expos',
    'Awards',
    'competitions',
    'Other',
  ];

  types: string[] = [
  'presentation', 'panel discussion',
  'Networking sessions',
  'Conferences',
  'seminar',
  'Workshops',
  'classes',
  'VIP experiences',
  'Sponsorships',
  'Trade shows and expos',
  'Awards',
  'competitions',
  'Festivals',
  'parties'
  ];
}
