import React from 'react';

import './gallery.styles.scss';
import Card from '../../components/gallery-components/card-character/card-character.component';
import useFetch from '../../effects/use-fetch.effect';
import { ApiRickAndMorty } from '../../constants/api.constants';
import {
  IApiRickAndMorty,
  IApiRickAndMortyResult,
} from '../../interfaces/api-rick-and-morty.interfaces';
import { ITranslation } from '../../interfaces/core.interfaces';

const GalleryPage = ({ t }: ITranslation): JSX.Element => {
  const res = useFetch<IApiRickAndMorty>(ApiRickAndMorty.CHARACTER());
  return (
    <div className="gallery">
      <h2 className="gallery__title">{t('gallery.title.value')}</h2>
      <div className="gallery__card-container">
        {res?.response ? (
          res.response?.results.map((character: IApiRickAndMortyResult) => (
            <Card key={character.id} {...character} />
          ))
        ) : (
          <div>{t('gallery.loading.value')}</div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
