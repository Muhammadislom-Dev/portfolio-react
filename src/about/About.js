import React from 'react';
import NavSec from '../home/NavSec';
import PageInfo from './PageInfo';
import AboutMain from './AboutMain';
import Footer from '../footer/Footer';
import Slide from 'react-reveal/Slide';

function About() {
  return (
    <>
      <Slide top duration='1000'>
        <NavSec />
        <PageInfo />
      </Slide>
      <Slide bottom duration='1000'>
        <AboutMain />
        <Footer />
      </Slide>
    </>
  );
}

export default About;