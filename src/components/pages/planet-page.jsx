import { Component } from "react";

import Row from "../row";
import {
  PlanetList,
  PlanetDetails,
} from '../sw-components';

export default class PlanetPage extends Component {
  state = {
    selectedItem: null
  }

  onItemSlected = (selectedItem) => this.setState({ selectedItem });

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSlected} />}
        right={<PlanetDetails itemId={selectedItem} />} />
    )
  }
}
