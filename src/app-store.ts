import {routerMiddleware} from 'connected-react-router';
import {applyMiddleware, createStore, Store} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {persistReducer, persistStore} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import appReducer from './app.reducer';
import {history} from './app.router';
import {composeWithDevTools} from 'redux-devtools-extension';
import epics from './epics';

const persistedReducer = persistReducer({
  key: 'scoreboard-io.state',
  version: 1,
  transforms: [immutableTransform()],
  blacklist: ['router'],
  storage,
}, appReducer);

const epicMware = createEpicMiddleware();
const routerMware = routerMiddleware(history);

const appStore:Store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(
    applyMiddleware(epicMware),
    applyMiddleware(routerMware),
    applyMiddleware(thunk),
  ),
);

epicMware.run(epics);

export const persistor = persistStore(appStore);

export default appStore;
