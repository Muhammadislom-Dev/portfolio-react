import React from 'react';
import './styles/main.scss';
import './styles/animation.scss';
import './styles/responsive.scss';
import HomeMain from './home/HomeMain';
import Portfolio from './portfolio/Portfolio';
import SetUp from './setup/SetUp';
import About from './about/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function Routing() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomeMain} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/setup' component={SetUp} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default Routing;