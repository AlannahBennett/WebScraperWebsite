import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

function FormCard({ setScrapedText, setError, error }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setScrapedText('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/scrape', { url });
      setScrapedText(response.data.text);
    } catch (err) {
      setError('Failed to scrape the URL. Please try again.');
    }finally {
      setLoading(false);
    }
  };

  return (
    <Card className="my-5">
      <Card.Body>
        <Card.Title>How to use:</Card.Title>
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="primary" type="submit" disabled={loading}>
                Submit
              </Button>
              {loading && <div style={{ marginLeft: '10px' }}><LoadingSpinner /></div>}
            </div>
          </Form>
          {error && <p style={{ color: 'red' }}>{error}</p>}

        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FormCard;
