import { getRandomPhoto } from './api';
import { $ } from './query';
import { contrastColor } from './contrast-color';

const imageElement: HTMLElement = $('#image');
const placeholderElement: HTMLElement = $('#placeholder');

function loadImages() {
  getRandomPhoto().then(photo => {
    setMainColor(photo.color);
    loadPlaceholder(photo.urls.thumb);
    loadOriginal(photo.urls.custom);
  });
}
// initial load
loadImages();

function loadPlaceholder(url: string) {
  imageLoader(url).then(() => {
    placeholderElement.style.backgroundImage = `url(${url})`;
    placeholderElement.classList.remove('hidden');
  });
}

function loadOriginal(url: string) {
  imageLoader(url).then(() => {
    imageElement.style.backgroundImage = `url(${url})`;
    placeholderElement.classList.add('hidden');
  });
}

function imageLoader(src: string) {
  return new Promise<any>((resolve, reject) => {
    const image = new Image();
    image.src = src;

    if (image.decode) {
      image
        .decode()
        .then(resolve)
        .catch(reject);
    } else {
      image.onload = resolve;
      image.onerror = reject;
    }
  });
}

function setMainColor(color: string) {
  document.documentElement.style.setProperty('--main-color', color);
  document.documentElement.style.setProperty(
    '--secondary-color',
    contrastColor(color),
  );
}
