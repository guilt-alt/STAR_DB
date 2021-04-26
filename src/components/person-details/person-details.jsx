import { Component } from 'react';

import Api from '../../api';
import ErrorButton from '../error-button';

import './person-details.css';

export default class PersonDetails extends Component {

  api = new Api();

  state = {
    person: null,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;

    if (!personId) return;

    this.api
      .getPerson(personId)
      .then((person) => {
        this.setState({
          person
        })
      })
  }

  render() {

    if (!this.state.person) {
      return <span>Select a person from a list</span>
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    const toUppercase = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{toUppercase(gender)}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year:</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color:</span>
              <span>{toUppercase(eyeColor)}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
