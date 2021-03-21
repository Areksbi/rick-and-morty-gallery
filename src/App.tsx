import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './App.scss';
import { showModal } from './store/modal/modal.actions';
import { TranslationsEnums } from './enums/translations.enums';
import { UrlsConst } from './constants/urls.constants';
import GalleryPage from './pages/gallery/gallery.component';
import Footer from './components/@core/footer/footer.component';
import Header from './components/@core/header/header.component';
import Modal from './components/@shared/modal/modal.component';

const mapDispatchToProps = {
  dispatchShowModal: showModal,
};
const connector = connect(undefined, mapDispatchToProps);
type AppProps = ConnectedProps<typeof connector>;

const App = (props: AppProps): JSX.Element => {
  const { dispatchShowModal } = props;
  const { t } = useTranslation(TranslationsEnums.COMMON);

  return (
    <>
      <a className="skip-to-main" href="#gallery-results">
        {t('core.skipToMain.label')}
      </a>
      <Header t={t} />
      <button
        onClick={() => {
          dispatchShowModal({
            title: 'A new title.',
            description: <div>Ciao</div>,
          });
        }}
      >
        Show Modal
      </button>
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
      <Modal />
    </>
  );
};

export default connector(App);
