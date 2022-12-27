import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UseEffectComponent from './components/useEffectComponent';
import UseStateComponent from './components/UseStateComponent';
import UseContextComponent from './components/useContextComponent';
import UseReducerComponent from './components/useReducerComponent';
import UseRefComponent from './components/useRefComponent';
import UseEffectWithCleanUpComponent from './components/useEffectWithCleanUpComponent';
import UseMemoComponent from './components/useMemoComponent';

function App() {
  return (
    <Container>
      <Row className="m-3">
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

      <Row className="m-3">
        <Col>
          <UseRefComponent />
        </Col>
        <Col>
          <UseEffectWithCleanUpComponent />
        </Col>
        <Col>
          <UseMemoComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
