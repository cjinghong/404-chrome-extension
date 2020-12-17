import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: 'Going somewhere?',
      searchText: '',
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  onTextChange(event) {
    const { target } = event;
    this.setState({
      searchText: target.value,
    });
  }

  onKeyUp(event) {
    const { keyCode } = event;
    if (keyCode === 13) {
      const { searchText } = this.state;
      event.preventDefault();

      const isUrl = /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/.test(searchText);
      if (isUrl) {
        const hasHttp = searchText.startsWith('http://') || searchText.startsWith('https://');
        if (hasHttp) {
          window.open(searchText);
        } else {
          window.open(`http://${searchText}`, '_self');
        }
      } else if (chrome) {
        console.log(chrome.search.query(searchText));
      }
    }
  }

  render() {
    const { placeholderText, searchText } = this.state;

    return (
      <div className={styles['search-container']}>
        <div className={`${styles['search-bar']} ${styles.dark}`}>
          <input
            ref={(input) => { this.input = input; }}
            type="text"
            placeholder={placeholderText}
            aria-label={placeholderText}
            onChange={this.onTextChange}
            onKeyUp={this.onKeyUp}
            value={searchText}
          />
        </div>
        <button type="button" className={`${styles['show-hide-tab']} ${styles.dark}`}>
          <FontAwesomeIcon icon={faTimes} size="2x" color="white" />
        </button>
      </div>
    );
  }
}

export default Search;
