import React, { Component } from 'react';

import './app.css';

import Api from '../../api';

import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorIndicator from '../error-indicator';

import { PeoplePage } from '../pages';

import { ApiProvider } from '../api-context';

export default class App extends Component {

  api = new Api();

  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ApiProvider value={this.api}>
        <div className="stardb-app">
          <Header />

          <RandomPlanet />

          <PeoplePage />

        </div>
      </ApiProvider>
    );
  }
}
