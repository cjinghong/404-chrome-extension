import React, { Component } from 'react';

import './NewTab.css';

import CreditsRetryButtons from './CreditsRetryButtons/CreditsRetryButtons';
import randomTemplate from './templates/random-template';
import Footer from './Footer/Footer';

class NewTab extends Component {
  constructor(props) {
    super(props);

    this.regenerateTemplate = this.regenerateTemplate.bind(this);
    this.state = {
      template: randomTemplate(this.regenerateTemplate),
    };
  }

  regenerateTemplate() {
    document.location.reload();
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

        <Footer />
      </div>
    );
  }
}

export default NewTab;
