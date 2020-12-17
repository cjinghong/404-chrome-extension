import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: 'Going somewhere?',
    };
  }

  render() {
    const { placeholderText } = this.state;

    return (
      <div className="search-container">
        <div className="search-bar dark">
          <input type="text" placeholder={placeholderText} aria-label={placeholderText} />
        </div>
        <div className="show-hide-tab dark">
          <FontAwesomeIcon icon={faTimes} size="2x" color="white" />
        </div>
      </div>
    );
  }
}

export default Search;
