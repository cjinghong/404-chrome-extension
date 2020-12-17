import React, { Component } from 'react';
import styles from './Dave.module.css';

class Dave extends Component {
  render() {
    const visual = document.getElementById('visual');
    const events = ['resize', 'load'];

    events.forEach((e) => {
      window.addEventListener(e, () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = 45 / (width / height);
        visual.style.transform = `translate(-50%, -50%) rotate(-${ratio}deg)`;
        visual.style.zIndex = 1;
      });
    });

    return (
      <div className={styles.container}>
        <div className={styles['background-wrapper']}>
          <h1 id="visual">404</h1>
        </div>
        <p className={styles.text}>The page you’re looking for does not exist.</p>
      </div>
    );
  }
}

export default Dave;
