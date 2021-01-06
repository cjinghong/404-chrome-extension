import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';
import styles from './CreditsRetryButtons.module.css';

class CreditsRetryButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };

    this.onRetryClick = this.onRetryClick.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onRetryClick() {
    const { onRetry } = this.props;
    onRetry();
  }

  onOpenModal() {
    this.setState({
      modalVisible: true,
    });
  }

  onCloseModal() {
    this.setState({
      modalVisible: false,
    });
  }

  render() {
    const { modalVisible } = this.state;
    const { credits } = this.props;
    const { author, url } = credits || {};

    const hasCreditsAuthor = !!credits && !!author;

    return (
      <div className={styles.container}>
        <Rodal visible={modalVisible} onClose={this.onCloseModal}>
          <div>Content</div>
        </Rodal>
        <div className={styles.creditsContainer}>
          {hasCreditsAuthor && (
            <>
              <div>Credits:</div>
              <a href={url || '#'} target="_blank" rel="noreferrer">
                {author}
              </a>
            </>
          )}
        </div>
        <div className={styles.buttonsContainer}>
          <button
            type="button"
            className={styles.randomButton}
            onClick={this.onRetryClick}
          >
            <i className="fa fa-sync" />
          </button>
          <button
            type="button"
            className={styles.randomButton}
            onClick={this.onOpenModal}
          >
            <i className="fa fa-plus" />
          </button>
        </div>
      </div>
    );
  }
}

CreditsRetryButtons.propTypes = {
  credits: PropTypes.shape({
    author: PropTypes.string,
    url: PropTypes.string,
  }),
  onRetry: PropTypes.func.isRequired,
};

CreditsRetryButtons.defaultProps = {
  credits: null,
};

export default CreditsRetryButtons;
