import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({ applicationId: process.env.VUE_APP_UNSPLASH_TOKEN });

export default function getRandomPhoto() {
  const orientation = window.innerHeight < window.innerWidth ? "landscape" : "portrait";

  return unsplash.photos.getRandomPhoto({
    orientation,
    width: window.innerWidth * 2,
  }).then(toJson);
}
