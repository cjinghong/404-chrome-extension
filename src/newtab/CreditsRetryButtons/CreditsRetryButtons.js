import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import randomAnimation from '../../lotties/random.json';

import styles from './CreditsRetryButtons.module.css';

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: randomAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

class CreditsRetryButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimation: false,
    };

    this.onRandomAnimation = this.onRandomAnimation.bind(this);
    this.onRetryClick = this.onRetryClick.bind(this);
  }

  onRetryClick() {
    const { onRetry } = this.props;
    this.onRandomAnimation();
    onRetry();
  }

  onRandomAnimation() {
    this.setState({
      startAnimation: true,
    });
  }

  render() {
    const { startAnimation } = this.state;
    const { credits } = this.props;
    const { author, url } = credits || {};

    const hasCreditsAuthor = !!credits && !!author;

    return (
      <div className={styles.container}>
        <div className={styles.creditsContainer}>
          { hasCreditsAuthor && (
            <>
              <div>Credits:</div>
              <a href={url || '#'} target="_blank" rel="noreferrer">
                {author}
              </a>
            </>
          )}
        </div>
        <div
          className={styles.randomButton}
          role="button"
          onClick={this.onRetryClick}
        >
          <Lottie
            ref={(lottieView) => { this.lottieView = lottieView; }}
            options={defaultOptions}
            height={130}
            width={130}
            isStopped={!startAnimation}
            eventListeners={[
              {
                eventName: 'complete',
                callback: () => {
                  this.setState({
                    startAnimation: false,
                  });
                },
              },
            ]}
          />
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
