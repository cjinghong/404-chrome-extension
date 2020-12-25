import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Mars.css';

class Mars extends Component {
  render() {
    const { onRandom404 } = this.props;

    return (
      <div className="mars-template">
        <div className="mars" />
        <img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" />
        <img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" />
        <p className="title">Oh no!!</p>
        <p className="subtitle">
          You’re either misspelling the URL
          {' '}
          <br />
          {' '}
          or requesting a page that's no longer here.
        </p>
        <div align="center">
          <a className="btn-back" onClick={onRandom404}>Back to previous page</a>
        </div>
        <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" />
        <img src="https://assets.codepen.io/1538474/spaceship.svg" className="spaceship" />
      </div>
    );
  }
}

Mars.propTypes = {
  onRandom404: PropTypes.func.isRequired,
};

export default Mars;
