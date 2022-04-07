import React from 'react';
import NavSec from '../home/NavSec';
import Slide from 'react-reveal/Slide';
import PageInfo from './PageInfo';
import Projects from './Projects';
import Footer from '../footer/Footer';

function Portfolio() {
  return (
    <>
      <Slide top duration='1000'>
        <NavSec />
      </Slide>
        <PageInfo />
      <Slide bottom duration='500'>
        <Projects />
        <Footer />
      </Slide>
    </>
  );
}

export default Portfolio;