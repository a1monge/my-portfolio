import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Featured from './components/Featured';
import Cloud from './components/Cloud';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Cloud />
        <Featured />
        <Contact /> {/* Add ContactForm at the bottom */}
      </div>
      
    </div>
  );
}

export default App;
