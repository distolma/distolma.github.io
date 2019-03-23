import { RandomPhoto } from '../interfaces/photo.interface';
import { get } from './http';

const connection =
  navigator['connection'] ||
  navigator['mozConnection'] ||
  navigator['webkitConnection'];
const saveData = connection && connection.saveData;

export function getRandomPhoto(): Promise<RandomPhoto> {
  const orientation =
    window.innerHeight < window.innerWidth ? 'landscape' : 'portrait';
  const width = window.innerWidth * (saveData ? 1 : 2);

  return get<RandomPhoto>(
    `https://api.unsplash.com/photos/random?orientation=${orientation}&w=${width}`,
  );
}
