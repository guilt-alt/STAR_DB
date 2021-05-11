import ItemDetails, { Record } from '../item-details';
import {withApi} from '../hoc-helpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <Record field='population' label='Population:' />
      <Record field='rotationPeriod' label='Rotation Period:' />
      <Record field='diameter' label='Diameter:' />
    </ItemDetails>
  )
};

const mapMethodsToProps = (api) => {
  return {
    getData: api.getPlanet,
    getImgUrl: api.getPlanetImg
  }
}

export default withApi(mapMethodsToProps)(PlanetDetails);
