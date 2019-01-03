import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ConnectedRouter} from 'connected-react-router';
import React, {Component} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import appStore, {persistor} from './app-store';
import AppRouter, {history} from './app.router';

import './app.scss';

class App extends Component {
  render() {
    return (
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <StoreProvider store={appStore}>
          <MuiThemeProvider>
            <ConnectedRouter history={history}>
              <div className="App">
                <AppRouter />
              </div>
            </ConnectedRouter>
          </MuiThemeProvider>
        </StoreProvider>
      </PersistGate>
    );
  }
}

export default App;
