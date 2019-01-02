import {routerMiddleware} from 'connected-react-router';
import {applyMiddleware, createStore, Store} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import appReducer from './app.reducer';
import {history} from './app.router';
import {composeWithDevTools} from 'redux-devtools-extension';

const persistedReducer = persistReducer({
  key: 'scoreboard-io.state',
  version: 1,
  transforms: [immutableTransform()],
  blacklist: ['router'],
  storage,
}, appReducer);

const appStore:Store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history)),
  ),
);

export const persistor = persistStore(appStore);

export default appStore;
