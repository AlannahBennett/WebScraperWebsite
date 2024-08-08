import React, { useState } from 'react';
import FormCard from './components/FormCard';
import ScrapedTextCard from './components/ScrapedTextCard';
import mainImg from './images/h2.jpg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  const [scrapedText, setScrapedText] = useState('');
  const [error, setError] = useState('');

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col md={6}>
            <FormCard setScrapedText={setScrapedText} setError={setError} error={error} />
            <ScrapedTextCard text={scrapedText} />
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <img src={mainImg} alt="Main" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
