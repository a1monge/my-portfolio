import React from 'react';
import Header from './components/Header';
import Cloud from './components/Cloud';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import BackEnd from './components/BackEnd';
import FrontEnd from './components/FrontEnd';
import FullStack from './components/FullStack';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Navbar />
        <Cloud />
        <FullStack />
        <FrontEnd />
        <BackEnd />
        <Contact />
      </div>

    </div>
  );
}

export default App;
