import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useReducer } from 'react';
import { Stack } from 'react-bootstrap';

const intialState = {
  counter: 100,
};

type ACTIONTYPES =
  | {
      type: 'increment';
      payload: number;
    }
  | { type: 'decrement'; payload: number };

function counterReducer(state: typeof intialState, action: ACTIONTYPES) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case 'decrement':
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    default:
      throw new Error('Bad action');
  }
}

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, intialState);

  console.log('UseReducerComponent is rendered');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>UseReducer</Card.Title>
        <Card.Text>{state.counter}</Card.Text>
        <Stack direction="horizontal" gap={2}>
          <Button
            variant="primary"
            onClick={() => dispatch({ type: 'increment', payload: 10 })}
          >
            increment
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch({ type: 'decrement', payload: 10 })}
          >
            decrement
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
