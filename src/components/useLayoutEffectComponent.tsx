import Card from 'react-bootstrap/Card';
import { useEffect, useLayoutEffect, useState } from 'react';

export default function UseLayoutEffectComponent() {
  const [num, setNum] = useState<number>(0);
  const [color, setColor] = useState<string>('');

  useLayoutEffect(() => {
    console.log('in useLayoutEffect hook');
    setColor('green');
  }, []);

  useEffect(() => {
    console.log('in useEffect hook');
    setNum(20);
  }, []);

  console.log('UseLayoutEffectComponent is rendered');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{ color }}>UseLayoutEffect</Card.Title>
        <Card.Text>{num}</Card.Text>
      </Card.Body>
    </Card>
  );
}
