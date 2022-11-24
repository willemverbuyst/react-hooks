import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import UserContext, { UserState } from './store';

function ConsumerComponent() {
  const user = useContext(UserContext);

  console.log('ComsumerComponent is rendered');

  return (
    <>
      <Card.Title>UseContext</Card.Title>
      <Card.Text>First: {user.firstName}</Card.Text>
      <Card.Text>Last: {user.lastName}</Card.Text>
    </>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    firstName: 'Harrie',
    lastName: 'Warrie',
  });

  console.log('UseContextComponent is rendered');

  const handleClick = () => {
    setUser({
      firstName: 'Vera',
      lastName: 'von Venus',
    });
  };

  return (
    <UserContext.Provider value={user}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <ConsumerComponent />
          <Button variant="primary" onClick={handleClick}>
            Update context
          </Button>
        </Card.Body>
      </Card>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
