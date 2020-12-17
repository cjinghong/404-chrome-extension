import React from 'react';
import Paozinho from './404paozinho/404paozinho';
import Dave from './Dave/Dave';

export default () => {
  const templates = [
    {
      component: <Paozinho />,
      credits: {
        author: 'Genaro Colusso',
        url: 'https://codepen.io/genarocolusso/pen/XWbGMLp',
      },
    },
    {
      component: <Dave />,
      credits: {
        author: 'Dave',
        url: 'https://codepen.io/theyve/pen/zpxrLG',
      },
    },
  ];

  return templates[Math.floor(Math.random() * templates.length)];
};
