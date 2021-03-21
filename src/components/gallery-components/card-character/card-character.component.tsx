import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './card-character.styles.scss';
import { ApiRickAndMortyStatusEnum } from '../../../enums/api-rick-and-morty.enums';
import {
  IApiRickAndMortyCharactersResult,
  IApiRickAndMortyEpisode,
} from '../../../interfaces/api-rick-and-morty.interfaces';
import { showModal } from '../../../store/modal/modal.actions';
import { TranslationsEnums } from '../../../enums/translations.enums';
import { ApiRickAndMorty } from '../../../constants/api.constants';
import Episodes from '../episodes/episodes.components';

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
            <td>{location.name}</td>
          </tr>
          <tr>
            <td>{t('gallery.character.origin')}</td>
            <td>{origin.name}</td>
          </tr>
          <tr>
            <td className={'card__episodes'} colSpan={2}>
              <button
                className={'card__episodes-button'}
                onClick={onEpisodesClick}
              >
                <span className={'card__episodes-label'}>
                  IModalProps {t('gallery.character.episodesHidden')}
                </span>
                {t('gallery.character.episodes')} &#8599;
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default connector(Card);
