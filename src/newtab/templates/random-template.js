import React from 'react';
import Paozinho from './404paozinho/404paozinho';
import Dave from './Dave/Dave';
import BSOD from './BSOD/BSOD';
import GalaxyNotFound from './GalaxyNotFound/GalaxyNotFound';
import Caveman from './Caveman/Caveman';
import Mars from './Mars/Mars';
import CuteGhost from './CuteGhost/CuteGhost';
import Bicycle from './Bicycle/Bicycle';
import RollingBox from './RollingBox/RollingBox';
import Tractor from './Tractor/Tractor';
import SpaceWindow from './SpaceWindow/SpaceWindow';
import NoSignal from './NoSignal/NoSignal';
import Smiley from './Smiley/Smiley';
import TextAnim from './TextAnim/TextAnim';
import SadMac from './SadMac/SadMac';
import Train from './Train/Train';

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
    {
      id: 5,
      component: <Mars onRandom404={onRandom404} />,
      credits: {
        author: 'Asyraf Hussin',
        url: 'https://codepen.io/AsyrafHussin/pen/KxWRrK',
      },
    },
    {
      id: 6,
      component: <CuteGhost onRandom404={onRandom404} />,
      credits: {
        author: 'Julie Park',
        url: 'https://codepen.io/juliepark/pen/erOoeZ',
      },
    },
    {
      id: 7,
      component: <Bicycle />,
      credits: {
        author: 'Volodymyr Hashenko',
        url: 'https://codepen.io/gxash/pen/rrJYwm',
      },
    },
    {
      id: 8,
      component: <RollingBox />,
      credits: {
        author: 'Yusuke Nakaya',
        url: 'https://codepen.io/YusukeNakaya/pen/YLPVER',
      },
    },
    {
      id: 9,
      component: <Tractor />,
      credits: {
        author: 'Nick Soltis',
        url: 'https://codepen.io/nss5161/pen/pGLqor',
      },
    },
    {
      id: 10,
      component: <SpaceWindow />,
      credits: {
        author: 'Keith',
        url: 'https://codepen.io/KeithPaul/pen/zYGeema',
      },
    },
    {
      id: 11,
      component: <NoSignal />,
      credits: {
        author: 'Kay Pooma',
        url: 'https://codepen.io/kaypooma/pen/ehfjC',
      },
    },
    {
      id: 12,
      component: <Smiley />,
      credits: {
        author: 'Arman Azizpour',
        url: 'https://codepen.io/arman_bag/pen/GbMGVG',
      },
    },
    {
      id: 13,
      component: <TextAnim />,
      credits: {
        author: 'Ricardo Prieto',
        url: 'https://codepen.io/ricardpriet/pen/MOKEam',
      },
    },
    {
      id: 14,
      component: <SadMac />,
      credits: {
        author: 'Jon Kantner',
        url: 'https://codepen.io/jkantner/pen/aPLWJm',
      },
    },
    {
      id: 15,
      component: <Train />,
      credits: {
        author: 'Carla',
        url: 'https://codepen.io/ckroll17',
      },
    },
  ];

  return templates[Math.floor(Math.random() * templates.length)];
};
