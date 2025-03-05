import React from 'react';

import {  createBrowserRouter } from "react-router-dom";
import AboutMe from '../Pages/AboutMe/AboutMe';
import Main from '../LayOut/Main';
import Portfolio from '../Pages/Portfolio/Portfolio';
import ServicesAndPrices from '../Pages/ServicesAndPrices/ServicesAndPrices';
import Resume from '../Pages/Resume/Resume';
import HireMe from '../components/Hireme';
import ContactPage from '../components/ContactPage';
import BlogPage from '../components/Blog';


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
           path:'/',
           element:<AboutMe></AboutMe>
        },
        {
           path:'/aboutme',
           element:<AboutMe></AboutMe>
        },
        {
          path:'/portfolio',
          element:<Portfolio></Portfolio>
        },
        {
           path:'/resume',
           element:<Resume></Resume>
        },
        {
           path:'/hireme',
           element:<HireMe></HireMe>
        },
        {
           path:'/contact',
           element:<ContactPage></ContactPage>
        },
        {
           path:'/blog',
           element:<BlogPage></BlogPage>
        },

      ]
    },
  ]);


export default routes;