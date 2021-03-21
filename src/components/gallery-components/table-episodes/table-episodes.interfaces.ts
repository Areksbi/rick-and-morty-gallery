import { IApiRickAndMortyEpisode } from '../../../interfaces/api-rick-and-morty.interfaces';

export interface ITableEpisodesProps {
  episodes: IApiRickAndMortyEpisode | IApiRickAndMortyEpisode[];
}
