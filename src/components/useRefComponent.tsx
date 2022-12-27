import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

export default function UseRefComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef?.current?.focus();
  };

  console.log('UseRefComponent is rendered');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>UseRef</Card.Title>
        <Form.Label htmlFor="input">Input</Form.Label>
        <Form.Control type="text" id="input" ref={inputRef} />
        <Button className="mt-2" variant="primary" onClick={handleClick}>
          focus input
        </Button>
      </Card.Body>
    </Card>
  );
}
