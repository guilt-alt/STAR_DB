import ItemDetails, { Record } from '../item-details';
import { withApi } from '../hoc-helpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field='gender' label='Gender:' />
      <Record field='birthYear' label='Birth Year:' />
      <Record field='eyeColor' label='Eye Color:' />
    </ItemDetails>
  )
};

const mapMethodsToProps = (api) => {
  return {
    getData: api.getPerson,
    getImgUrl: api.getPersonImg
  }
}

export default withApi(mapMethodsToProps)(PersonDetails);
