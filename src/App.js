import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FeaturedProjects from './components/Featured';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Header />
          </Route>
          <Route path="/featured-projects">
            <FeaturedProjects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
