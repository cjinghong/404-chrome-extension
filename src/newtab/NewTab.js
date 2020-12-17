import React, { Component } from 'react';

import './NewTab.css';
import Search from './search/Search';
import randomTemplate from './templates/random-template';

class NewTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template: randomTemplate(),
    };
  }

  render() {
    const { template } = this.state;
    return (
      <div className="App">
        <div className="input-overlay">
          <Search />
        </div>
        { template.component }
      </div>
    );
  }
}

export default NewTab;
