const KEY = 'cf2490a94f8eee61bc9fdce89fe09521a0ec14ef593924d780c3c77b79af08df';

const getColors = (image) => new Vibrant(image).swatches();

const getVibrantColor = (colors) => {
  if (colors.Vibrant) return colors.Vibrant.getHex();
  else if (colors.LightVibrant) return colors.LightVibrant.getHex();
  else return 'rgba(256, 256, 256, 0.7)';
};

const isLandscape = window.innerHeight < window.innerWidth;

const getMainColor = (colors) => {
  const maxPopulationColor = Object
    .keys(colors)
    .map((key) => colors[key])
    .sort((a, b) => b.population - a.population)[0].getHex();
  return maxPopulationColor;
};

const setSeletion = (color) => {
  const cssText = `
    color: #fff;
    background-color: ${color};
  `;
  const css = `
    ::-moz-selection {${cssText}}
    ::selection {${cssText}}
  `;
  insertCss(css);
};

const setBackground = (color, url) => {
  const style = document.body.style;
  style.backgroundColor = color;
  style.backgroundImage = `url(${url})`;
};

const setThemeColor = (color) => {
  const metas = document.head.querySelectorAll('meta[theme]');
  Array.prototype.forEach.call(metas, (meta) => {
    meta.setAttribute('content', color);
  });
};

const getUserInfo = (data) => {
  if (data) {
    const { name, links } = data.user;
    const link = [
      links.html,
      '?utm_source=distolma',
      '&utm_medium=referral',
      '&utm_campaign=api-credit',
    ].join('');
    return { name, link };
  }
};

const usetInfoTemplate = (user) => `
  <p class="user-info">
    <span class="breckets">
      <span><a target="_blank" rel="nofollow" href="${user.link}">${user.name}</a></span>
      <span><a target="_blank" rel="nofollow" href="https://unsplash.com/">Unsplash</a></span>
    </span>
  </p>
`;

const displayUserInfo = (data) => {
  const user = getUserInfo(data);
  document.querySelector('#userInfo').innerHTML = usetInfoTemplate(user);
  return data;
};

const setAccentColor = (color) => {
  const css = `
    a:hover i{color:${color}};
    a:focus i{color:${color}};
  `;
  insertCss(css);
};

const insertCss = (css) => {
  const style = document.createElement('style');
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.getElementsByTagName('head')[0].appendChild(style);
};

const parseJSON = (response) => {
  return response.json();
};

const mapResponseToUrl = (body) => body.urls.regular;

const onLoadHandler = (img, url) => {
  const colors = getColors(img);
  const mainColor = getMainColor(colors);
  const vibrantColor = getVibrantColor(colors);
  setBackground(mainColor, url);
  setThemeColor(mainColor);
  setSeletion(vibrantColor);
  setAccentColor(vibrantColor);
};

const loadImage = (imageUrl) => {
  const url = imageUrl || '/dist/img/bg.jpeg';
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    onLoadHandler(img, url);
    deleteLoader();
    stopReloadAnim();
  };
  img.src = url;
};

const deleteLoader = () => {
  const body = document.body;
  const loader = document.getElementById('preloader');
  if (!loader) return;
  loader.classList.add('end');
  loader.addEventListener('transitionend', () => {
    loader.remove();
    body.classList.remove('loading');
  });
};

const orientation = isLandscape ? 'landscape' : 'portrait';

const fetchImage = () =>
  fetch([
    'https://api.unsplash.com/photos/random',
    `?w=${window.innerWidth}`,
    `&orientation=${orientation}`,
  ].join(''), {
    headers: {
      Authorization: `Client-ID ${KEY}`,
    },
  })
    .then(parseJSON)
    .then(displayUserInfo)
    .then(mapResponseToUrl)
    .then(loadImage)
    .catch(() => loadImage());

const stopReloadAnim = () => {
  const buttom = document.getElementById('reloadImage');
  buttom.classList.remove('active');
};

document.getElementById('reloadImage')
  .addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.add('active');
    fetchImage();
  });

let toggle = false;
document.getElementById('hideProfile')
  .addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.toggle('hide-profile');
    const icon = this.querySelector('i').classList;
    toggle = !toggle;
    if (toggle) {
      icon.remove('icon-eye-off');
      icon.add('icon-eye');
    } else {
      icon.add('icon-eye-off');
      icon.remove('icon-eye');
    }
  });

window.onload = fetchImage;
