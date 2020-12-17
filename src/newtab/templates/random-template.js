import React from 'react';
import paozinho from './404paozinho/404paozinho';

export default () => {
  const templates = [
    <paozinho />,
  ];

  return templates[Math.floor(Math.random() * templates.length)];
};
