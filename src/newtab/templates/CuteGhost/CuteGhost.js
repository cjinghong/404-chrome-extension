import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CuteGhost.css';

class CuteGhost extends Component {
  render() {
    const { onRandom404 } = this.props;

    return (
      <div className="cute-ghost-template">
        <div id="background" />
        <div className="top">
          <h1>404</h1>
          <h3>page not found</h3>
        </div>
        <div className="container">
          <div className="ghost-copy">
            <div className="one" />
            <div className="two" />
            <div className="three" />
            <div className="four" />
          </div>
          <div className="ghost">
            <div className="face">
              <div className="eye" />
              <div className="eye-right" />
              <div className="mouth" />
            </div>
          </div>
          <div className="shadow" />
        </div>
        <div className="bottom">
          <p>Boo, looks like a ghost stole this page!</p>
          <form className="search">
            <input type="text" className="search-bar" placeholder="Search" />
            <button type="submit" className="search-btn">
              <i className="fa fa-search" />
            </button>
          </form>
          <div className="buttons">
            <button className="btn" onClick={onRandom404}>Back</button>
            <button className="btn" onClick={onRandom404}>Home</button>
          </div>
        </div>
      </div>
    );
  }
}

CuteGhost.propTypes = {
  onRandom404: PropTypes.func.isRequired,
};

export default CuteGhost;
