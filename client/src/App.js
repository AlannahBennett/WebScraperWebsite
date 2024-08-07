import React from 'react';
import FormCard from './components/FormCard';
import mainImg from './images/h2.jpg';
import './App.css';

function App() {
  return (
    <div className='container my-5'>
    <div className="App">
      <FormCard />
      <img src={mainImg} className="myImage" alt="description" />
    </div>
    </div>
  );
}

export default App;
