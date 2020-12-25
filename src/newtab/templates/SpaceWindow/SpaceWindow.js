import React, { Component } from 'react';
import './SpaceWindow.css';

class SpaceWindow extends Component {
  componentDidMount() {
    const starContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i += 1) {
      starContainer.innerHTML += '<div class="star"></div>';
    }
  }

  render() {
    return (
      <div className="spacewindow-template">
        <div className="wrapper">
          <div className="text_group">
            <p className="text_404">404</p>
            <p className="text_lost">
              The page you are looking for
              <br />
              has been lost in space.
            </p>
          </div>
          <div className="window_group">
            <div className="window_404">
              <div className="stars" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpaceWindow;
