// src/RoutesConfig.js
import { lazy } from 'react';
const Contact = lazy(() => import('../../pages/Contact'))
const Home = lazy(() => import('../../pages/Home'))
const About = lazy(() => import('../../pages/About'))

const routesConfig = [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path:'/contact',
    element: <Contact/>
  },
  {
    path:'/about',
    element:<About/>
  }  
];

export default routesConfig;
