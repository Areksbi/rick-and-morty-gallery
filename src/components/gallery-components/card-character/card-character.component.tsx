import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './card-character.styles.scss';
import { ApiRickAndMorty } from '../../../constants/api.constants';
import { ApiRickAndMortyLocationEnums, ApiRickAndMortyStatusEnum } from '../../../enums/api-rick-and-morty.enums';
import {
  IApiRickAndMortyCharactersResult,
  IApiRickAndMortyEpisode,
  IApiRickAndMortyLocation,
  IApiRickAndMortyLocationResponse,
} from '../../../interfaces/api-rick-and-morty.interfaces';
import { showModal } from '../../../store/modal/modal.actions';
import { TranslationsEnums } from '../../../enums/translations.enums';
import TableEpisodes from '../table-episodes/table-episodes.components';
import TableLocation from '../table-location/table-location.component';

const mapDispatchToProps = { dispatchShowModal: showModal };
const connector = connect(undefined, mapDispatchToProps);
type CardProps = IApiRickAndMortyCharactersResult & ConnectedProps<typeof connector>;

const Card = ({ name, image, gender, location, origin, species, status, type, episode, dispatchShowModal }: CardProps): JSX.Element => {
  const [t] = useTranslation(TranslationsEnums.COMMON);

  const onEpisodesClick = async () => {
    // @ts-ignore
    const listEpisodes: string[] = episode.map((ep: string) => ep.split('/').pop());
    const res = await fetch(ApiRickAndMorty.EPISODES(listEpisodes));
    const episodes: IApiRickAndMortyEpisode[] = await res.json();
    dispatchShowModal({
      title: `${t('gallery.character.episodesWith')} ${name}`,
      content: <TableEpisodes episodes={episodes} />,
    });
  };
  const onLocationClick = async (locationToSearch: IApiRickAndMortyLocation) => {
    const locationId = locationToSearch.url.split('/').pop();
    if (!locationId) return;

    const res = await fetch(ApiRickAndMorty.LOCATION(locationId));
    const locResp: IApiRickAndMortyLocationResponse = await res.json();
    dispatchShowModal({
      title: `${locationToSearch.name}`,
      content: <TableLocation residents={locResp.residents.length} type={locResp.type} dimension={locResp.dimension} />,
    });
  };
  const tableRow = (field: string, value: JSX.Element | string) =>
    value ? (
      <tr>
        <td>{field}</td>
        <td>{value}</td>
      </tr>
    ) : null;

  return (
    <article className="card">
      <header>
        <h3 className="card__title">{name}</h3>
        <div className="card__image-container">
          <img className="card__image" src={image} alt={`${t('gallery.character.imageOf')} ${name}`} />
        </div>
      </header>
      <table className="card__info">
        <tbody>
          {tableRow(t('gallery.character.species'), species)}
          {tableRow(t('gallery.character.type'), type)}
          {tableRow(t('gallery.character.gender'), gender)}
          {tableRow(
            t('gallery.character.status'),
            <span className="card__status">
              {status === ApiRickAndMortyStatusEnum.ALIVE ? (
                <span className="card__status-icon card__status-icon--alive"></span>
              ) : (
                status === ApiRickAndMortyStatusEnum.DEAD && <span className="card__status-icon card__status-icon--dead"></span>
              )}
              {status}
            </span>
          )}
          {tableRow(
            t('gallery.character.location'),
            <>
              {location.name === ApiRickAndMortyLocationEnums.UNKNOWN ? (
                <span>{location.name}</span>
              ) : (
                <button className={'card__location-button'} onClick={() => onLocationClick(location)}>
                  <span className={'card__location-label--hidden'}>{t('gallery.character.clickToOpen')}</span>
                  <span className={'card__location-label'}>{location.name} &#8599;</span>
                </button>
              )}
            </>
          )}
          {tableRow(
            t('gallery.character.origin'),
            <>
              {origin.name === ApiRickAndMortyLocationEnums.UNKNOWN ? (
                <span>{origin.name}</span>
              ) : (
                <button className={'card__origin-button'} onClick={() => onLocationClick(origin)}>
                  <span className={'card__origin-label--hidden'}>{t('gallery.character.clickToOpen')}</span>
                  <span className={'card__origin-label'}>{origin.name} &#8599;</span>
                </button>
              )}
            </>
          )}
          <tr>
            <td className={'card__episodes'} colSpan={2}>
              <button className={'card__episodes-button'} onClick={onEpisodesClick}>
                <span className={'card__episodes-label--hidden'}>{t('gallery.character.clickToOpen')}</span>
                <span className={'card__episodes-label'}>{t('gallery.character.episodes')} &#8599;</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default connector(Card);
