import React from 'react';
import Paozinho from './404paozinho/404paozinho';
import Dave from './Dave/Dave';
import BSOD from './BSOD/BSOD';

export default (onRandom404) => {
  const templates = [
    {
      id: 0,
      component: <Paozinho />,
      credits: {
        author: 'Genaro Colusso',
        url: 'https://codepen.io/genarocolusso/pen/XWbGMLp',
      },
    },
    {
      id: 1,
      component: <Dave />,
      credits: {
        author: 'Dave',
        url: 'https://codepen.io/theyve/pen/zpxrLG',
      },
    },
    {
      id: 2,
      component: <BSOD onRandom404={onRandom404} />,
      credits: {
        author: 'Ian Gloude',
        url: 'https://codepen.io/igloude/pen/qNNWKr',
      },
    },
  ];

  return templates[Math.floor(Math.random() * templates.length)];
};
