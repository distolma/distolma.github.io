export interface RandomPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  description: string;
  exif: Exif;
  location: Location;
  current_user_collections: Currentusercollection[];
  urls: Urls;
  links: Links;
  user: User;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  links: UserLinks;
}

interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  custom: string;
}

interface Currentusercollection {
  id: number;
  title: string;
  published_at: string;
  updated_at: string;
  curated: boolean;
  cover_photo?: any;
  user?: any;
}

interface Location {
  city: string;
  country: string;
  position: Position;
}

interface Position {
  latitude: number;
  longitude: number;
}

interface Exif {
  make: string;
  model: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}
