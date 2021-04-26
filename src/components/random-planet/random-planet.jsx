import React, { Component } from 'react';

import './random-planet.css';

import Loader from '../loader';
import ErrorIndicator from '../error-indicator';
import Api from '../../api';

export default class RandomPlanet extends Component {

  constructor() {
    super();

    this.updatePlanet();
  }

  state = {
    planet: {},
    loading: true,
    error: false
  };

  api = new Api();

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 19) + 2;

    this.api
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {

    const { planet, loading, error } = this.state;

    const loader = loading ? <Loader /> : null;
    const errorMessage = error ? <ErrorIndicator/> : null;
    const content = !(loading || error) ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {loader}
        {errorMessage}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population:</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period:</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter:</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}