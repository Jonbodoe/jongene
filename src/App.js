import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import NavBar from './components/main/nav'
import Contact from './pages/contact'
import Overview from './pages/overview';
import BodyContainer from './components/main/body'

function App() {
  return (
    <Router>
      <NavBar />
      <BodyContainer>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Overview />
          </Route>
        </Switch>
      </BodyContainer>
    </Router>
  );
}

export default App;
