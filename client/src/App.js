import React, { useState } from 'react';
import FormCard from './components/FormCard';
import ScrapedTextCard from './components/ScrapedTextCard';
import mainImg from './images/h2.jpg';
import './App.css';

function App() {
  const [scrapedText, setScrapedText] = useState('');
  const [error, setError] = useState('');

  return (
    <div className='container my-5'>
      <FormCard setScrapedText={setScrapedText} setError={setError} error={error} />
      <ScrapedTextCard text={scrapedText} />
    </div>
  );
}

export default App;
