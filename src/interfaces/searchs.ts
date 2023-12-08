export interface Search {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: Type;
  language: string;
  genres: string[];
  status: Status;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: Date;
  ended: Date;
  officialSite: null | string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface Links {
  self: Previousepisode;
  previousepisode: Previousepisode;
}

export interface Previousepisode {
  href: string;
}

export interface Externals {
  tvrage: number | null;
  thetvdb: number;
  imdb: null | string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: null | string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average: number | null;
}

export interface Schedule {
  time: string;
  days: string[];
}

export enum Status {
  Ended = "Ended",
}

export enum Type {
  Animation = "Animation",
  Scripted = "Scripted",
}
