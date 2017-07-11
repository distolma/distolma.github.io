const getMainColor = (image) => {
  const vibrant = new Vibrant(image).swatches();
  const maxPopulationColor = Object
    .keys(vibrant)
    .map((key) => vibrant[key])
    .sort((a, b) => b.population - a.population)[0].getHex();
  return maxPopulationColor;
};

const setThemeColor = (color) => {
  const metas = document.head.querySelectorAll('meta[theme]');
  metas.forEach((meta) => meta.setAttribute('content', color));
};

const parseJSON = (response) => {
  return response.json();
};

const mapToUrl = (body) => body.urls.regular;

const setBackground = (imageUrl) => {
  const url = imageUrl || '/dist/img/bg.jpeg';
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  const bodyStyle = document.body.style;
  img.onload = () => {
    const color = getMainColor(img);
    bodyStyle.backgroundColor = color;
    bodyStyle.backgroundImage = `url(${url})`;
    setThemeColor(color);
    deleteLoader();
  };
  img.src = url;
};

const deleteLoader = () => {
  const body = document.body;
  const loader = document.getElementById('preloader');
  loader.classList.add('end');
  loader.addEventListener('transitionend', () => {
    loader.remove();
    body.classList.remove('loading');
  });
};

fetch(`https://api.unsplash.com/photos/random?w=${window.innerWidth}`, {
  headers: {
    Authorization: 'Client-ID cf2490a94f8eee61bc9fdce89fe09521a0ec14ef593924d780c3c77b79af08df',
  },
})
  .then(parseJSON)
  .then(mapToUrl)
  .then(setBackground)
  .catch(() => setBackground());

