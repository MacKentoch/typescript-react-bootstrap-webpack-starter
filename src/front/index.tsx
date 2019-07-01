import React from 'react';
import { hydrate, render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { loadComponents, getState } from 'loadable-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Root';

// #region constants
const ELEMENT_TO_BOOTSTRAP = 'root';
const bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// #endregion

// #region globals (styles, polyfill ...)
// smoothscroll polyfill
smoothScrollPolyfill.polyfill();
// force polyfill (even if browser partially implements it)
(window as any).__forceSmoothScrollPolyfill__ = true;
(window as any).snapSaveState = () => getState();
// #endregion

// #region render (with hot reload if dev)
const renderApp = (RootComponent: React.Component<any, any>) => {
  const Application = () => (
    <AppContainer>
      <RootComponent />
    </AppContainer>
  );

  // needed for react-snap:
  if (bootstrapedElement && bootstrapedElement.hasChildNodes()) {
    loadComponents().then(() => {
      hydrate(<Application />, bootstrapedElement);
    });
  } else {
    render(<Application />, bootstrapedElement);
  }
};

renderApp(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}
// #endregion
