const ApiBase = {
  RICK_AND_MORTY_API: 'https://rickandmortyapi.com/api',
  ROOT: '',
};

export const ApiRickAndMorty = {
  CHARACTER: (page = 1) =>
    `${ApiBase.RICK_AND_MORTY_API}/character?page=${page}`,
};
