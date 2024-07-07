import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS

import $ from 'jquery'; // Import jQuery for Bootstrap JS components



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
