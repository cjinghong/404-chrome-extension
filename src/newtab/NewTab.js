import React, { Component } from 'react';
import '@polymer/paper-button/paper-button';

import './NewTab.css';
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
        {{ template }}
      </div>
    );
  }
}

export default NewTab;
