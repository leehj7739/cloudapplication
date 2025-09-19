import logo from './logo.svg';
import './App.css';
import PricingSections from './components/PricingSections';
import React from 'react';
import Header from './components/Header';


function App() {
  return (
    <React.Fragment>
      <Header />
      <PricingSections />
    </React.Fragment>
  );
}

export default App;
