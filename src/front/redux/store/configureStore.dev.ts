import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { Middleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../modules/reducers';
import fetchMiddleware from '../middlewares/fetchMiddleware';

// #region constants
export const history = createHistory();
// #endregion

// #region createStore : enhancer

// #region logger middleware (dev only)
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});
// #endregion

const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
    (fetchMiddleware as Middleware),
    loggerMiddleware, // logger at the end
  ),
);
// #endregion

// #region persisted reducer
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router'],
};

const persistedReducer = persistReducer(
  persistConfig,
  connectRouter(history)(reducer),
);
// #endregion

export default function configureStore(initialState: any = {}) {
  // $FlowIgnore
  const store = createStore(persistedReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../modules/reducers', () =>
      store.replaceReducer(require('../modules/reducers').default),
    );
  }

  const persistor = persistStore(store);
  return { store, persistor };
}
