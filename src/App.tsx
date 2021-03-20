import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.scss';
import { UrlsConst } from './constants/urls.constants';
import GalleryPage from './pages/gallery/gallery.component';
import Footer from './components/@core/footer/footer.component';
import Header from './components/@core/header/header.component';
import { useTranslation } from 'react-i18next';

const App = (): JSX.Element => {
  const { t } = useTranslation('common');
  return (
    <>
      <Header t={t} />
      <main>
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
      </main>
      <Footer t={t} />
    </>
  );
};

export default App;
