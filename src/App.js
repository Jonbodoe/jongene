import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './components/main/nav'
import Overview from './pages/overview';
import BodyContainer from './components/main/body'
import Contact from './pages/contact';
import Video from './pages/video';

function App() {
  return (
    <Router>
      <section id="container">
      <NavBar />
      <BodyContainer>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <Overview />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/contact`}>
            <Contact />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/video`}>
            <Video />
          </Route>
        </Switch>
      </BodyContainer>
      </section>
    </Router>
  );
}

export default App;
