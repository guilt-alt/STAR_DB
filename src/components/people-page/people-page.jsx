import { Component } from 'react';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class PeoplePage extends Component {

  state = {
    selectedPerson: 3,
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onItemSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    )
  }
}
