import React from 'react';
import './main_page.css';
import image from './assets/background2.png';
import BoxMain from './box/box.tsx';
import Description from './text/text';
import { Box } from '@mui/material'; 


function MainPage() {
  return (
    <div className="fullscreen">
      <img src={image} className="full-img" />
      <BoxMain />
      <Description />
    </div>
  );
}

export default MainPage;