import {routerMiddleware} from 'connected-react-router';
import {applyMiddleware, compose, createStore, Store} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import appReducer from './app.reducer';
import {history} from './app.router';

// @ts-ignore
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
