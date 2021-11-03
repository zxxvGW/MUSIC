import React from 'react';
import { Redirect } from 'react-router-dom';

import Discover from '@/pages/discover';
import Mine from '@/pages/mine';
import Friends from '@/pages/friends';


const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      <Redirect to='/discover' />
    }
  },
  {
    path: '/discover',
    component: Discover,
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '/friends',
    component: Friends,
  },
]

export default routes
