export interface Radical {
  id: number;
  traditional: string;
  english: string;
  pinyin: string;
  strokeCount: number;
}

export type RadicalField = keyof Radical;

export const radicals: Radical[] = require('./data/radicals');
