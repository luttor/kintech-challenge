export interface Show {
  id: number;
  url: string;
  name: string;
  type: Type;
  language: Language;
  genres: string[];
  status: Status;
  runtime: number | null;
  averageRuntime: number;
  premiered: Date;
  ended: Date | null;
  officialSite: null | string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: Network | null;
  dvdCountry: Country | null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface Links {
  self: Nextepisode;
  previousepisode: Nextepisode;
  nextepisode?: Nextepisode;
}

export interface Nextepisode {
  href: string;
}

export interface Country {
  name: Name;
  code: Code;
  timezone: Timezone;
}

export enum Code {
  CA = "CA",
  De = "DE",
  Fr = "FR",
  GB = "GB",
  Jp = "JP",
  Us = "US",
}

export enum Name {
  Canada = "Canada",
  France = "France",
  Germany = "Germany",
  Japan = "Japan",
  UnitedKingdom = "United Kingdom",
  UnitedStates = "United States",
}

export enum Timezone {
  AmericaHalifax = "America/Halifax",
  AmericaNewYork = "America/New_York",
  AsiaTokyo = "Asia/Tokyo",
  EuropeBusingen = "Europe/Busingen",
  EuropeLondon = "Europe/London",
  EuropeParis = "Europe/Paris",
}

export interface Externals {
  tvrage: number;
  thetvdb: number | null;
  imdb: null | string;
}

export interface Image {
  medium: string;
  original: string;
}

export enum Language {
  English = "English",
  Japanese = "Japanese",
}

export interface Network {
  id: number;
  name: string;
  country: Country | null;
  officialSite: null | string;
}

export interface Rating {
  average: number | null;
}

export interface Schedule {
  time: Time;
  days: Day[];
}

export enum Day {
  Friday = "Friday",
  Monday = "Monday",
  Saturday = "Saturday",
  Sunday = "Sunday",
  Thursday = "Thursday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
}

export enum Time {
  Empty = "",
  The0900 = "09:00",
  The1200 = "12:00",
  The1300 = "13:00",
  The2000 = "20:00",
  The2030 = "20:30",
  The2100 = "21:00",
  The2130 = "21:30",
  The2200 = "22:00",
  The2230 = "22:30",
  The2300 = "23:00",
  The2330 = "23:30",
}

export enum Status {
  Ended = "Ended",
  Running = "Running",
  ToBeDetermined = "To Be Determined",
}

export enum Type {
  Animation = "Animation",
  Documentary = "Documentary",
  Reality = "Reality",
  Scripted = "Scripted",
  TalkShow = "Talk Show",
}
