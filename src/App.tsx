import React from 'react';
import Home from './components/home/Home';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Home />
      <Sidebar />
    </div>
  );
}

export default App;