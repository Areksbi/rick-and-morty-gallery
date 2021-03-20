import { ApiRickAndMortyGenderEnum } from '../enums/api-rick-and-morty.enums';

interface IApiRickAndMortyInfo {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}

interface IApiRickAndMortyLocation {
  name: string;
  url: string;
}

export interface IApiRickAndMortyResult {
  created: Date;
  episode: string[];
  gender: ApiRickAndMortyGenderEnum;
  id: number;
  image: string;
  location: IApiRickAndMortyLocation;
  name: string;
  origin: IApiRickAndMortyLocation;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface IApiRickAndMorty {
  info: IApiRickAndMortyInfo;
  results: IApiRickAndMortyResult[];
}
