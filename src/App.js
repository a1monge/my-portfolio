import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Featured from './components/Featured';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Featured />
    </div>
  );
}

export default App;
