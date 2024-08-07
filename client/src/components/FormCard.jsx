import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from 'axios';


function FormCard() {
  const [url, setUrl] = useState('');
  const [params, setParams] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/scrape', { url, params });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>URL Scraper</Card.Title>
        <Card.Text>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="urlInput">
              <Form.Label>Please input a URL:</Form.Label>
              <Form.Control type="text" placeholder="Enter URL" value={url} onChange={e => setUrl(e.target.value)} />
              <Form.Text className="text-muted">
                //any exceptions to url
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="urlparams">
              <Form.Label>What would you like to return?</Form.Label>
              <Form.Control type="text" placeholder="Password" value={params} onChange={e => setParams(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FormCard;
