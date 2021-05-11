import ItemDetails, { Record } from '../item-details';
import { withApi } from '../hoc-helpers';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='model' label='Model:' />
      <Record field='length' label='Length:' />
      <Record field='costInCredits' label='Cost:' />
    </ItemDetails>
  )
};

const mapMethodsToProps = (api) => {
  return {
    getData: api.getStarship,
    getImgUrl: api.getStarshipImg
  }
}

export default withApi(mapMethodsToProps)(StarshipDetails);
