import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BSOD.module.css';

class BSOD extends Component {
  render() {
    const { onRandom404 } = this.props;
    return (
      <div className={styles['larger-container']}>
        <div className={`${styles.bsod} ${styles.container}`}>
          <h1 className={`${styles.neg} ${styles.title}`}>
            <span className={styles.bg}>Error - 404</span>
          </h1>
          <p>An error has occured, to continue:</p>
          <p>
            * Return to our homepage.
            <br />
            * Send us an e-mail about this error and try later.

          </p>
          <nav className={styles.nav}>
            <a href="#" className={styles.link}>index</a>
          &nbsp;|&nbsp;
            <a href="#" className={styles.link} onClick={onRandom404}>
              More 404 Please
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

BSOD.propTypes = {
  onRandom404: PropTypes.func.isRequired,
};

export default BSOD;
