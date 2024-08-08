import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";

function FormCard({ setScrapedText, setError, error }) {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setScrapedText('');

    try {
      const response = await axios.post('http://localhost:5000/scrape', { url });
      setScrapedText(response.data.text);
    } catch (err) {
      setError('Failed to scrape the URL. Please try again.');
    }
  };

  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>URL Scraper</Card.Title>
        <Card.Text>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="urlInput">
              <Form.Label>Please input a URL:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Form.Text className="text-muted">Enter a valid URL.</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FormCard;
