import { RandomPhoto } from '../interfaces/photo.interface';
import { get } from './http';

export function getRandomPhoto(): Promise<RandomPhoto> {
  const orientation =
    window.innerHeight < window.innerWidth ? 'landscape' : 'portrait';
  const width = window.innerWidth * 2;

  return get<RandomPhoto>(
    `https://api.unsplash.com/photos/random?orientation=${orientation}&w=${width}`,
  );
}
