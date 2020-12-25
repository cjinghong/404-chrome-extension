import React, { Component } from 'react';
import './Caveman.css';

class Caveman extends Component {
  render() {
    return (
      <div className="caveman-template">
        <div className="text"><p>404</p></div>
        <div className="container">
          <div className="caveman">
            <div className="leg">
              <div className="foot"><div className="fingers" /></div>
            </div>
            <div className="leg">
              <div className="foot"><div className="fingers" /></div>
            </div>
            <div className="shape">
              <div className="circle" />
              <div className="circle" />
            </div>
            <div className="head">
              <div className="eye"><div className="nose" /></div>
              <div className="mouth" />
            </div>
            <div className="arm-right"><div className="club" /></div>
          </div>
          <div className="caveman">
            <div className="leg">
              <div className="foot"><div className="fingers" /></div>
            </div>
            <div className="leg">
              <div className="foot"><div className="fingers" /></div>
            </div>
            <div className="shape">
              <div className="circle" />
              <div className="circle" />
            </div>
            <div className="head">
              <div className="eye"><div className="nose" /></div>
              <div className="mouth" />
            </div>
            <div className="arm-right"><div className="club" /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Caveman;
