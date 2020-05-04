export interface Radical {
  id: number;
  traditional: string;
  english: string;
  pinyin: string;
  strokeCount: number;
}

export const radicals: Radical[] = require('./data/radicals');
