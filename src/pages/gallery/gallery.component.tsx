import React, { useState } from 'react';

import './gallery.styles.scss';
import Card from '../../components/gallery-components/card-character/card-character.component';
import useFetch from '../../effects/use-fetch.effect';
import Pagination from '../../components/gallery-components/pagination/pagination.component';
import { ApiRickAndMorty } from '../../constants/api.constants';
import {
  IApiRickAndMorty,
  IApiRickAndMortyResult,
} from '../../interfaces/api-rick-and-morty.interfaces';
import { ITranslation } from '../../interfaces/core.interfaces';

const GalleryPage = ({ t }: ITranslation): JSX.Element => {
  const [page, setPage] = useState(1);
  const res = useFetch<IApiRickAndMorty>(ApiRickAndMorty.CHARACTER(page));
  const goToPage = (selectedPage: number) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className="gallery">
      <h2 className="gallery__title">{t('gallery.title.value')}</h2>
      {res.response ? (
        <>
          <div className="gallery__card-container">
            {res.response.results.map((character: IApiRickAndMortyResult) => (
              <Card key={character.id} {...character} />
            ))}
          </div>
          <Pagination
            goToPage={goToPage}
            perPage={20}
            pages={res.response.info.pages}
            currentPage={page}
          />
        </>
      ) : (
        <div>{t('gallery.loading.value')}</div>
      )}
    </div>
  );
};

export default GalleryPage;
