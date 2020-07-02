import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './components/main/nav'
import Overview from './pages/overview';
import BodyContainer from './components/main/body'

function App() {
  return (
    <Router>
      <NavBar />
      <BodyContainer>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`}>
            <Overview />
          </Route>
        </Switch>
      </BodyContainer>
    </Router>
  );
}

export default App;
