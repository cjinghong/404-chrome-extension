import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <a href="https://twitter.com/cjinghong">
          <img src="/img/icons/twitter.svg" alt="twitter logo" />
        </a>
      </div>
    );
  }
}

export default Footer;
