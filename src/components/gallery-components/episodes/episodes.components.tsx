import './episodes.styles.scss';
import { IApiRickAndMortyEpisode } from '../../../interfaces/api-rick-and-morty.interfaces';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationsEnums } from '../../../enums/translations.enums';

interface IEpisodes {
  episodes: IApiRickAndMortyEpisode | IApiRickAndMortyEpisode[];
}

const Episodes = ({ episodes }: IEpisodes) => {
  const [t] = useTranslation(TranslationsEnums.COMMON);

  return (
    <table className={'episodes'}>
      <thead>
        <tr className={'episodes__row episodes__row--border'}>
          <th className={'episodes__cell episodes__cell--left'}>{t('episodes.table.episode')}</th>
          <th className={'episodes__cell episodes__cell--left'}>{t('episodes.table.name')}</th>
          <th className={'episodes__cell episodes__cell--left'}>{t('episodes.table.airDate')}</th>
        </tr>
      </thead>
      <tbody>
        {(Array.isArray(episodes) ? episodes : [episodes])
          .sort((a: IApiRickAndMortyEpisode, b: IApiRickAndMortyEpisode) => a.episode.localeCompare(b.episode))
          .map(({ episode, air_date, name, id }: IApiRickAndMortyEpisode) => (
            <tr className={'episodes__row'} key={`episode-${id}`}>
              <td className={'episodes__cell'}>{episode}</td>
              <td className={'episodes__cell'}>{name}</td>
              <td className={'episodes__cell'}>{air_date}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Episodes;
