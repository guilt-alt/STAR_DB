import { Component } from "react";

import Row from "../row";
import {
  PersonList,
  PersonDetails,
} from '../sw-components';

export default class PeoplePage extends Component {
  state = {
    selectedItem: null
  }

  onItemSlected = (selectedItem) => this.setState({ selectedItem });

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSlected} />}
        right={<PersonDetails itemId={selectedItem} />} />
    )
  }
}
