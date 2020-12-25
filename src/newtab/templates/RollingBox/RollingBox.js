import React, { Component } from 'react';
import './RollingBox.css';

class RollingBox extends Component {
  render() {
    return (
      <div className="rollingbox-template">
        <div className="rail">
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
          <div className="stamp four">4</div>
          <div className="stamp zero">0</div>
        </div>
        <div className="world">
          <div className="forward">
            <div className="box">
              <div className="wall" />
              <div className="wall" />
              <div className="wall" />
              <div className="wall" />
              <div className="wall" />
              <div className="wall" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RollingBox;
