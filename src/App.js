import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
<<<<<<< HEAD
import FeaturedProjects from './components/Featured';
=======

>>>>>>> parent of 67df20a (finished about me page mostly)

function App() {
  return (
    <Router>
      <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <Navbar />
        <Switch>
          <Route path="/my-portfolio" exact>
            <Header />
          </Route>
          <Route path="/featured">
            <FeaturedProjects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
