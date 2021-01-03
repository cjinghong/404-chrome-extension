import React, { Component } from 'react';
import './TextAnim.css';

class TextAnim extends Component {
  render() {
    return (
      <div className="textAnim">
        <div className="error-container">
          <span><span>4</span></span>
          <span>0</span>
          <span><span>4</span></span>
        </div>
      </div>
    );
  }
}

export default TextAnim;
