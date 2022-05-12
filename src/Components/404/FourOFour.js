import React from 'react';
import { Card } from 'react-bootstrap';

const FourOFour = () => {
  return (
    <div>
      <Card>
    <Card.Img variant="top" src="https://i.ibb.co/r0n3xTM/istockphoto-538038858-1024x1024.jpg" />
    <Card.Body>
      <Card.Text className='text-6xl text-center font-bold text-red-600'>
        Please contact with your admin
      </Card.Text>
    </Card.Body>
  </Card>
    </div>
  );
};

export default FourOFour;