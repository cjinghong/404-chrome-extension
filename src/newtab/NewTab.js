import React, { Component } from 'react';

import './NewTab.css';

import CreditsRetryButtons from './CreditsRetryButtons/CreditsRetryButtons';
import randomTemplate from './templates/random-template';

class NewTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template: randomTemplate(),
    };

    this.regenerateTemplate = this.regenerateTemplate.bind(this);
  }

  regenerateTemplate() {
    this.setState({
      template: randomTemplate(),
    });
  }

  render() {
    const { template } = this.state;
    const { credits } = template;

    return (
      <div className="App">
        <CreditsRetryButtons credits={credits} onRetry={this.regenerateTemplate} />
        {/* <div className="input-overlay">
          <Search />
        </div> */}
        { template.component }
      </div>
    );
  }
}

export default NewTab;
