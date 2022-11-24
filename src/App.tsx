import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UseEffectComponent from './components/useEffectComponent';
import UseStateComponent from './components/UseStateComponent';
import UseContextComponent from './components/useContextComponent';
import UseReducerComponent from './components/useReducerComponent';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UseStateComponent />
        </Col>
        <Col>
          <UseEffectComponent />
        </Col>
        <Col>
          <UseContextComponent />
        </Col>
        <Col>
          <UseReducerComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
