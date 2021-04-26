import { Component } from 'react';

import './item-list.css';

import Api from '../../api';
import Loader from '../loader';

export default class ItemList extends Component {

  api = new Api();

  state = {
    peopleList: null,
  }

  componentDidMount() {
    this.api
      .getPeoples()
      .then((peopleList) => {
        this.setState({
          peopleList
        })
      })
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {

    const { peopleList } = this.state;

    const content = !peopleList ? <Loader /> : this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {content}
      </ul>
    );
  }
}
