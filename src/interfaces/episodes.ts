export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: Type;
  airdate: Date;
  airtime: Airtime;
  airstamp: Date;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: Links;
}

export interface Links {
  self: Self;
  show: Self;
}

export interface Self {
  href: string;
}

export enum Airtime {
  The2200 = "22:00",
}

export interface Image {
  medium: string;
  original: string;
}

export interface Rating {
  average: number;
}

export enum Type {
  Regular = "regular",
}
