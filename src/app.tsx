import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";

import appStore, {persistor} from "./app-store";
import AppRouter, {history} from "./app.router";

import './app.scss';
import {PersistGate} from "redux-persist/integration/react";


class App extends Component {
  render() {
    return (
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Provider store={appStore}>
          <ConnectedRouter history={history}>
            <div className="App">
              Scoreboard-io
              <AppRouter />
            </div>
          </ConnectedRouter>
        </Provider>
      </PersistGate>
    );
  }
}

export default App;
