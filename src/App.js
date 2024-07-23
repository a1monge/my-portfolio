import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Featured from './components/Featured';
import Cloud from './components/Cloud';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Featured />
        <Cloud />
      </div>
    </div>
  );
}

export default App;
