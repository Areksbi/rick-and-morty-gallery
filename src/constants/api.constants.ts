import { IApiRickAndMortyCharacter } from '../interfaces/api-rick-and-morty.interfaces';

const ApiBase = {
  RICK_AND_MORTY_API: 'https://rickandmortyapi.com/api',
  ROOT: '',
};

export const ApiRickAndMorty = {
  CHARACTER: (request: IApiRickAndMortyCharacter): string => {
    // eslint-disable
    // @ts-ignore
    const queryParams = new URLSearchParams(request).toString();
    // eslint-enable
    return `${ApiBase.RICK_AND_MORTY_API}/character?${queryParams}`;
  },
};
