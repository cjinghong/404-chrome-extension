import React, { Component } from 'react';
import './Tractor.css';

class Tractor extends Component {
  render() {
    return (
      <div className="tractor-template">
        <div className="outer-track">
          <div className="inner-track">
            <div className="tractor-container">
              <div className="tractor">
                <div className="body">
                  <div className="light" />
                  <div className="grill" />
                  <div className="exhaust" />
                  <div className="steering" />
                  <div className="seat" />
                  <div className="wheel-front" />
                  <div className="fender" />
                  <div className="wheel-back" />
                  <div className="hitch" />
                </div>
              </div>
            </div>
            <div className="rope" />
            <div className="tractor-container">
              <div className="tractor">
                <div className="body">
                  <div className="light" />
                  <div className="grill" />
                  <div className="exhaust" />
                  <div className="steering" />
                  <div className="seat" />
                  <div className="wheel-front" />
                  <div className="fender" />
                  <div className="wheel-back" />
                  <div className="hitch" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tractor;
