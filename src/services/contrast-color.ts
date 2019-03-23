export function contrastColor(hex: string): string {
  const threshold = 186;
  const { red, green, blue } = hexToColors(hex);

  return red * 0.299 + green * 0.587 + blue * 0.114 > threshold
    ? '#000000'
    : '#ffffff';
}

function hexToColors(hex: string) {
  hex = hex.charAt(0) === '#' ? hex.substring(1, 7) : hex;

  return {
    red: parseInt(hex.substring(0, 2), 16),
    green: parseInt(hex.substring(2, 4), 16),
    blue: parseInt(hex.substring(4, 6), 16),
  };
}
