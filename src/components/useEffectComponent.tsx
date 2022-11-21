import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

export default function UseEffectComponent() {
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => setNum((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  console.log('UseEffectComponent is rendered');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>UseEffect</Card.Title>
        <Card.Text>{num}</Card.Text>
      </Card.Body>
    </Card>
  );
}
