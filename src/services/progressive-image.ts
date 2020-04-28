import { getRandomPhoto } from './api';
import { $ } from './query';
import { contrastColor } from './contrast-color';

const imageElement: HTMLElement | null = $('#image');
const placeholderElement: HTMLElement | null = $('#placeholder');

function imageLoader(src: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const image = new Image();
    image.src = src;

    if (image.decode) {
      image.decode().then(resolve).catch(reject);
    } else {
      image.onload = (): void => resolve();
      image.onerror = reject;
    }
  });
}

function loadPlaceholder(url: string): void {
  imageLoader(url).then(() => {
    if (placeholderElement) {
      placeholderElement.style.backgroundImage = `url(${url})`;
      placeholderElement.classList.remove('hidden');
    }
  });
}

function loadOriginal(url: string): void {
  imageLoader(url).then(() => {
    if (placeholderElement && imageElement) {
      imageElement.style.backgroundImage = `url(${url})`;
      placeholderElement.classList.add('hidden');
    }
  });
}

function setMainColor(color: string): void {
  document.documentElement.style.setProperty('--main-color', color);
  document.documentElement.style.setProperty(
    '--secondary-color',
    contrastColor(color),
  );
}
function loadImages(): void {
  getRandomPhoto().then((photo) => {
    setMainColor(photo.color);
    loadPlaceholder(photo.urls.thumb);
    loadOriginal(photo.urls.custom);
  });
}
// initial load
loadImages();
