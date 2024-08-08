import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => (
  <Spinner animation="border" role="status" className='my-2'>
    <span className="sr-only"></span>
  </Spinner>
);

export default LoadingSpinner;
