import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './containers/Home';

function App() {
  return (
    <div className="App" id="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
