import React, { Component } from 'react';

import ErrorButton from '../error-button';

import './item-details.css';

const toUppercase = (string) => string ? string.charAt(0).toUpperCase() + string.slice(1) : string;

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{toUppercase(item[field])}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null,
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImgUrl } = this.props;

    if (!itemId) return;

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImgUrl(item)
        })
      })
  }

  render() {

    if (!this.state.item) {
      return <span>Select a item from a list</span>
    }

    const { item, image } = this.state;

    return (
      <div className="item-details card">
        <img className="item-image" src={image} alt="character" />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
