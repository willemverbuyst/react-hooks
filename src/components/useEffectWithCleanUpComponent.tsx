import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

export default function UseEffectWithCleanUpComponent() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.com/users', { signal }).then(
      async (response) => {
        if (response.ok) {
          const todos = await response.json();
          setUsers(todos);
        } else {
          throw new Error('something went wrong');
        }
      }
    );
    return () => {
      controller.abort();
    };
  }, []);

  console.log('UseEffectWithCleanUpComponent is rendered');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>UseEffect with Cleanup fn</Card.Title>
        {users &&
          users.map((user) => <Card.Text key={user.id}>{user.name}</Card.Text>)}
      </Card.Body>
    </Card>
  );
}
