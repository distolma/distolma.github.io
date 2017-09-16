export default function setMainColor(color) {
  const defaultColor = '#fff';
  return document.body.style.setProperty('--main-color', color || defaultColor);
}
