import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScrapedTextCard = ({ text }) => {
  return (
    <div className="card" style={{ margin: '20px' }}>
      <div className="card-body">
        <h5 className="card-title">Scraped Text</h5>
        <pre className="card-text" style={{ whiteSpace: 'pre-wrap' }}>
          {text || "No text scraped yet. Please enter a URL and submit to scrape text."}
        </pre>
      </div>
    </div>
  );
};

export default ScrapedTextCard;
