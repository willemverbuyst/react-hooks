import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function UseStateComponent() {
  const [numArr, setNumArr] = useState<number[]>([]);

  const handleClick = () => setNumArr([...numArr, numArr.length + 1]);

  console.log('UseStateComponent is rendered');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>UseState</Card.Title>
        <Card.Text>numArr: {JSON.stringify(numArr)}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          add number
        </Button>
      </Card.Body>
    </Card>
  );
}
