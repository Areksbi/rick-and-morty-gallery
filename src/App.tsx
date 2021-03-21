import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.scss';
import { UrlsConst } from './constants/urls.constants';
import GalleryPage from './pages/gallery/gallery.component';
import Footer from './components/@core/footer/footer.component';
import Header from './components/@core/header/header.component';
import { useTranslation } from 'react-i18next';
import { TranslationsEnums } from './enums/translations.enums';

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
            <Route
              exact
              path={UrlsConst.GALLERY}
              render={() => <GalleryPage t={t} />}
            />
            <Route>
              <Redirect to={UrlsConst.GALLERY} />
            </Route>
          </Switch>
        </div>
      </main>
      <Footer t={t} />
    </>
  );
};

export default App;
