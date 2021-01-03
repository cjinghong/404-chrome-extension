import React, { Component } from 'react';
import './NoSignal.css';

class NoSignal extends Component {
  render() {
    return (
      <div className="noSignal">
        <div className="error">404</div>
        <br />
        <br />
        <span className="info">File not found</span>
        <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" className="static" />
      </div>
    );
  }
}

export default NoSignal;
