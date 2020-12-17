import React from 'react';
import Paozinho from './404paozinho/404paozinho';

export default () => {
  const templates = [
    {
      component: <Paozinho />,
      credits: {
        author: 'Genaro Colusso',
        url: 'https://codepen.io/genarocolusso/pen/XWbGMLp',
      },
    },
  ];

  return templates[Math.floor(Math.random() * templates.length)];
};
