import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GalaxyNotFound.css';

class GalaxyNotFound extends Component {
  renderParticles(text, amount) {
    const particles = Array(amount).fill(0).map((_, index) => (
      <span className="galaxy-not-found-particle" key={`${text}${index}`}>
        {text}
      </span>
    ));
    return particles;
  }

  render() {
    const { onRandom404 } = this.props;

    return (
      <div className="galaxy-not-found-container">
        {this.renderParticles('4', 40)}
        {this.renderParticles('0', 40)}
        <article className="galaxy-not-found-content">
          <p>Damnit stranger,</p>
          <p>
            You got lost in the
            {' '}
            <strong>404</strong>
            {' '}
            galaxy.
          </p>
          <p>
            <button type="button" onClick={onRandom404}>
              Go back to earth.
            </button>
          </p>
        </article>
      </div>

    );
  }
}

GalaxyNotFound.propTypes = {
  onRandom404: PropTypes.func.isRequired,
};

export default GalaxyNotFound;
