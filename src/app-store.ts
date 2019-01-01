import {applyMiddleware, compose, createStore, Store} from "redux";
import {routerMiddleware} from "connected-react-router";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import immutableTransform from 'redux-persist-transform-immutable'

import appReducer from "./app.reducer";
import {history} from "./app.router";

// @ts-ignore
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer({
  key: 'scoreboard-io.state',
  version: 1,
  transforms: [immutableTransform()],
  blacklist: ["router"],
  storage
}, appReducer);

const appStore: Store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history)),
  )
);

export const persistor = persistStore(appStore);

export default appStore;
