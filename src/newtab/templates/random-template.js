import React from 'react';
import Paozinho from './404paozinho/404paozinho';
import Dave from './Dave/Dave';
import BSOD from './BSOD/BSOD';
import GalaxyNotFound from './GalaxyNotFound/GalaxyNotFound';
import Caveman from './Caveman/Caveman';

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
    {
      id: 3,
      component: <GalaxyNotFound onRandom404={onRandom404} />,
      credits: {
        author: 'Ian Gloude',
        url: 'https://codepen.io/igloude/pen/qNNWKr',
      },
    },
    {
      id: 4,
      component: <Caveman />,
      credits: {
        author: 'Sergio',
        url: 'https://codepen.io/SofiaSergio/pen/RMjyRL#',
      },
    },
  ];

  return templates[Math.floor(Math.random() * templates.length)];
};
