import React from 'react';
import NavSec from './NavSec';
import Slide from 'react-reveal/Slide';
import AboutInfo from './AboutInfo';

const HomeMain = () => {
  return (
    <>
      <Slide top duration='1250'>
        <NavSec />
      </Slide>
      <AboutInfo />
    </>
  );
}

export default HomeMain;