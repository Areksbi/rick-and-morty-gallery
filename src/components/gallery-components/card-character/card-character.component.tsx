import React from 'react';
import { useTranslation } from 'react-i18next';

import './card-character.styles.scss';
import { IApiRickAndMortyResult } from '../../../interfaces/api-rick-and-morty.interfaces';
import { ApiRickAndMortyStatusEnum } from '../../../enums/api-rick-and-morty.enums';

const Card = ({
  name,
  image,
  gender,
  location,
  origin,
  species,
  status,
  type,
}: IApiRickAndMortyResult) => {
  const { t } = useTranslation('common');
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
          {type && (
            <tr>
              <td>{t('gallery.character.type')}</td>
              <td>{type}</td>
            </tr>
          )}
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
        </tbody>
      </table>
      {/*<section>*/}
      {/*  <h4>Episodes</h4>*/}
      {/*  <ul>*/}
      {/*    {*/}
      {/*      episode.map((ep: string) => (*/}
      {/*        <li>{ep}</li>*/}
      {/*      ))*/}
      {/*    }*/}
      {/*  </ul>*/}
      {/*</section>*/}
    </article>
  );
};

export default Card;
