import React, { useState } from 'react';
import Home from './components/home/Home';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  
  const [orderItems, setOrderItems] = useState<Item[]>([]);

  function addItem(item: any) {
    const newItem = {...item, id: Math.random().toString(36).substring(2, 9)}
    setOrderItems((prevState) => { return [...prevState, newItem] });
    console.log(orderItems);
  }

  return (
    <div className="App">
      <Home order={orderItems} addOrderItem={addItem} />
      <Sidebar order={orderItems} removeOrderItem={setOrderItems} addOrderItem={addItem} />
    </div>
  );
}


export default App;