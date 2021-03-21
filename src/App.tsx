import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './App.scss';
import { TranslationsEnums } from './enums/translations.enums';
import { UrlsConst } from './constants/urls.constants';
import GalleryPage from './pages/gallery/gallery.component';
import Footer from './components/@core/footer/footer.component';
import Header from './components/@core/header/header.component';
import Modal from './components/@shared/modal/modal.component';

const App = (): JSX.Element => {
  const { t } = useTranslation(TranslationsEnums.COMMON);

  return (
    <>
      <a className="skip-to-main" href="#gallery-results">
        {t('core.skipToMain.label')}
      </a>
      <Header t={t} />
      <main id={'main'}>
        <div className="main-container">
          <Switch>
            <Route exact path={UrlsConst.ROOT}>
              <Redirect to={UrlsConst.GALLERY} />
            </Route>
            <Route exact path={UrlsConst.GALLERY} component={GalleryPage} />
            <Route>
              <Redirect to={UrlsConst.GALLERY} />
            </Route>
          </Switch>
        </div>
      </main>
      <Footer t={t} />
      <Modal />
    </>
  );
};

export default App;
