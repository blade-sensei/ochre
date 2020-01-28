import { Format } from './format';
import { Artist } from './artist';

export class Release {
  title: string;
  artist: Artist;
  formats: Format[];
  imageUrl: string;
  id: number;

  constructor() {}
}
