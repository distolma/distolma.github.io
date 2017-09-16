import Unsplash, { toJson } from 'unsplash-js';

const KEY = 'cf2490a94f8eee61bc9fdce89fe09521a0ec14ef593924d780c3c77b79af08df';

const unsplash = new Unsplash({ applicationId: KEY });

export default function getRandomPhoto() {
  const orientation = window.innerHeight < window.innerWidth ? 'landscape' : 'portrait';

  return unsplash.photos.getRandomPhoto({
    orientation,
    width: window.innerWidth * 2,
  }).then(toJson);
}
