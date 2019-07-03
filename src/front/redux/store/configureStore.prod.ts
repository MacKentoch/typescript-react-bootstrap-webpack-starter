import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reducer from '../modules/reducers';
import fetchMiddleware from '../middlewares/fetchMiddleware';

// #region constants
export const history = createHistory();
// #endregion

// #region createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware, fetchMiddleware, routerMiddleware(history)),
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
  const persistor = persistStore(store);
  return { store, persistor };
}
