import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <a href="https://twitter.com/cjinghong">
          <i className="fa fa-twitter" />
        </a>
      </div>
    );
  }
}

export default Footer;
