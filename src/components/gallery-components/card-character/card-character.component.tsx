import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './card-character.styles.scss';
import {
  ApiRickAndMortyLocationEnums,
  ApiRickAndMortyStatusEnum,
} from '../../../enums/api-rick-and-morty.enums';
import {
  IApiRickAndMortyCharactersResult,
  IApiRickAndMortyEpisode,
  IApiRickAndMortyLocation,
  IApiRickAndMortyLocationResponse,
} from '../../../interfaces/api-rick-and-morty.interfaces';
import { showModal } from '../../../store/modal/modal.actions';
import { TranslationsEnums } from '../../../enums/translations.enums';
import { ApiRickAndMorty } from '../../../constants/api.constants';
import Episodes from '../episodes/episodes.components';
import TableLocation from '../table-location/table-location.component';

const mapDispatchToProps = { dispatchShowModal: showModal };
const connector = connect(undefined, mapDispatchToProps);
type CardProps = IApiRickAndMortyCharactersResult &
  ConnectedProps<typeof connector>;

const Card = ({
  name,
  image,
  gender,
  location,
  origin,
  species,
  status,
  type,
  episode,
  dispatchShowModal,
}: CardProps): JSX.Element => {
  const { t } = useTranslation(TranslationsEnums.COMMON);
  const onEpisodesClick = async () => {
    // @ts-ignore
    const listEpisodes: string[] = episode
      .map((ep: string) => ep.split('/').pop())
      .filter((ep: string | undefined) => typeof ep === 'string');
    const res = await fetch(ApiRickAndMorty.EPISODES(listEpisodes));
    const json: IApiRickAndMortyEpisode[] = await res.json();
    dispatchShowModal({
      title: `${t('gallery.character.episodesWith')} ${name}`,
      content: <Episodes episodes={json} />,
    });
  };
  const onLocationClick = async (
    locationToSearch: IApiRickAndMortyLocation
  ) => {
    const locationId = locationToSearch.url.split('/').pop();
    if (!locationId) return;

    const res = await fetch(ApiRickAndMorty.LOCATION(locationId));
    const json: IApiRickAndMortyLocationResponse = await res.json();
    dispatchShowModal({
      title: `${locationToSearch.name}`,
      content: (
        <TableLocation
          residents={json.residents.length}
          type={json.type}
          dimension={json.dimension}
        />
      ),
    });
  };

  return (
    <article className="card">
      <header>
        <h3 className="card__title">{name}</h3>
        <div className="card__image-container">
          <img
            className="card__image"
            src={image}
            alt={`${t('gallery.character.imageOf')} ${name}`}
          />
        </div>
      </header>
      <table className="card__info">
        <tbody>
          <tr>
            <td>{t('gallery.character.species')}</td>
            <td>{species}</td>
          </tr>
          {type ? (
            <tr>
              <td>{t('gallery.character.type')}</td>
              <td>{type}</td>
            </tr>
          ) : null}
          <tr>
            <td>{t('gallery.character.gender')}</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td>{t('gallery.character.status')}</td>
            <td className="card__status">
              {status === ApiRickAndMortyStatusEnum.ALIVE ? (
                <span className="card__status-icon card__status-icon--alive"></span>
              ) : status === ApiRickAndMortyStatusEnum.DEAD ? (
                <span className="card__status-icon card__status-icon--dead"></span>
              ) : null}
              {status}
            </td>
          </tr>
          <tr>
            <td>{t('gallery.character.location')}</td>
            <td>
              {location.name === ApiRickAndMortyLocationEnums.UNKNOWN ? (
                <span>{location.name}</span>
              ) : (
                <button
                  className={'card__location-button'}
                  onClick={() => onLocationClick(location)}
                >
                  <span className={'card__location-label--hidden'}>
                    {t('gallery.character.clickToOpen')}
                  </span>
                  <span className={'card__location-label'}>
                    {location.name} &#8599;
                  </span>
                </button>
              )}
            </td>
          </tr>
          <tr>
            <td>{t('gallery.character.origin')}</td>
            <td>
              {origin.name === ApiRickAndMortyLocationEnums.UNKNOWN ? (
                <span>{origin.name}</span>
              ) : (
                <button
                  className={'card__origin-button'}
                  onClick={() => onLocationClick(origin)}
                >
                  <span className={'card__origin-label--hidden'}>
                    {t('gallery.character.clickToOpen')}
                  </span>
                  <span className={'card__origin-label'}>
                    {origin.name} &#8599;
                  </span>
                </button>
              )}
            </td>
          </tr>
          <tr>
            <td className={'card__episodes'} colSpan={2}>
              <button
                className={'card__episodes-button'}
                onClick={onEpisodesClick}
              >
                <span className={'card__episodes-label--hidden'}>
                  {t('gallery.character.clickToOpen')}
                </span>
                <span className={'card__episodes-label'}>
                  {t('gallery.character.episodes')} &#8599;
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default connector(Card);
