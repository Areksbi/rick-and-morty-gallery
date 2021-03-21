import { IApiRickAndMortyCharacter } from '../interfaces/api-rick-and-morty.interfaces';

const ApiBase = {
  RICK_AND_MORTY_API: 'https://rickandmortyapi.com/api',
  ROOT: '',
};

export const ApiRickAndMorty = {
  CHARACTER: (request: IApiRickAndMortyCharacter): string => {
    // @ts-ignore
    const queryParams = new URLSearchParams(request).toString();
    return `${ApiBase.RICK_AND_MORTY_API}/character?${queryParams}`;
  },
  EPISODES: (episodes: string[]): string =>
    `${ApiBase.RICK_AND_MORTY_API}/episode/${episodes}`,
};
