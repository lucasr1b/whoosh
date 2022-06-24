import React, { useState } from 'react';
import Home from './components/home/Home';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  
  const [orderItems, setOrderItems] = useState<Item[]>([]);

  function addItem(item: any) {
    setOrderItems((prevState) => { return [...prevState, item] });
  }

  return (
    <div className="App">
      <Home order={orderItems} addOrderItem={addItem} />
      <Sidebar order={orderItems} removeOrderItem={setOrderItems} addOrderItem={addItem} />
    </div>
  );
}


export default App;