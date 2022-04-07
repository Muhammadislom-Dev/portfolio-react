import React from 'react';
import NavSec from '../home/NavSec';
import PageInfo from './PageInfo';
import SetupMain from './SetupMain';
import Footer from '../footer/Footer';
import Slide from 'react-reveal/Slide';

function SetUp() {
  return (
    <>
      <Slide top duration='1000'>
        <NavSec />
        <PageInfo />
      </Slide>
      <Slide bottom duration='1000'>
        <SetupMain />
        <Footer />
      </Slide>
    </>
  );
}

export default SetUp;