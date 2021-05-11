import ItemList from '../item-list';
import {
  withData,
  withApi,
  withChildFunction,
  compose
} from '../hoc-helpers';

const renderName = ({ name }) => <span>{name}</span>

const mapPersonMethodsToProps = ({ getPeoples }) => {
  return {
    getData: getPeoples,
  }
}

const mapPlanetMethodsToProps = ({ getPlanets }) => {
  return {
    getData: getPlanets,
  }
}

const mapStarshipMethodsToProps = ({ getStarships }) => {
  return {
    getData: getStarships,
  }
}

const PersonList = compose(
  withApi(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withApi(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withApi(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};
