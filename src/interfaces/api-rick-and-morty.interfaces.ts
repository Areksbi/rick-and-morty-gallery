import {
  ApiRickAndMortyGenderEnum,
  ApiRickAndMortyStatusEnum,
} from '../enums/api-rick-and-morty.enums';

export interface IApiRickAndMortyCharacter {
  page?: string;
  name?: string;
  species?: string;
  type?: string;
  status?: ApiRickAndMortyStatusEnum | string;
  gender?: ApiRickAndMortyGenderEnum | string;
}

interface IApiRickAndMortyInfo {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}

export interface IApiRickAndMortyLocation {
  name: string;
  url: string;
}

export interface IApiRickAndMortyCharactersResult {
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

export interface IApiRickAndMortyCharacters {
  error?: string;
  info?: IApiRickAndMortyInfo;
  results?: IApiRickAndMortyCharactersResult[];
}

export interface IApiRickAndMortyEpisode {
  air_date: string;
  characters: string[];
  created: Date;
  episode: string;
  id: number;
  name: string;
  url: string;
}

export interface IApiRickAndMortyLocationResponse {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}
