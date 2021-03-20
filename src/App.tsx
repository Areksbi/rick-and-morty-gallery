import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.scss";
import { UrlsConst } from "./constants/urls.constants";
import GalleryPage from "./pages/gallery/gallery.component";
import Header from "./components/@core/header/header.component";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={UrlsConst.ROOT}>
          <Redirect to={UrlsConst.GALLERY} />
        </Route>
        <Route exact path={UrlsConst.GALLERY} component={GalleryPage} />
        <Route>
          <Redirect to={UrlsConst.GALLERY} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
