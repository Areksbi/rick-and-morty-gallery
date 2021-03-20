import { IApiRickAndMortyResult } from '../../../interfaces/api-rick-and-morty.interfaces';
import { ApiRickAndMortyGenderEnum } from '../../../enums/api-rick-and-morty.enums';
import React from 'react';
import { useTranslation } from 'react-i18next';

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
    <article>
      <header>
        <h3>{name}</h3>
        <img src={image} alt={`${t('gallery.character.imageOf')} ${name}`} />
      </header>

      <table>
        <tbody>
          <tr>
            <td>{t('gallery.character.species')}</td>
            <td>
              {species} {type && <span>({type})</span>}
            </td>
          </tr>
          <tr>
            <td>{t('gallery.character.status')}</td>
            <td>{status}</td>
          </tr>
          <tr>
            <td>{t('gallery.character.origin')}</td>
            <td>{origin.name}</td>
          </tr>
          <tr>
            <td>{t('gallery.character.location')}</td>
            <td>{location.name}</td>
          </tr>
          <tr>
            <td>{t('gallery.character.gender')}</td>
            <td>
              {gender === ApiRickAndMortyGenderEnum.MALE ? (
                <span>
                  <span>{t('gallery.character.genderMale')}</span>♂️
                </span>
              ) : gender === ApiRickAndMortyGenderEnum.FEMALE ? (
                <span>
                  <span>{t('gallery.character.genderFemale')}</span>♀️️
                </span>
              ) : (
                <span>{t('gallery.character.genderUnknown')}</span>
              )}
            </td>
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
