import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UseContextComponent from './components/useContextComponent';
import UseEffectComponent from './components/useEffectComponent';
import UseEffectWithCleanUpComponent from './components/useEffectWithCleanUpComponent';
import UseLayoutEffectComponent from './components/useLayoutEffectComponent';
import UseMemoComponent from './components/useMemoComponent';
import UseReducerComponent from './components/useReducerComponent';
import UseRefComponent from './components/useRefComponent';
import UseStateComponent from './components/useStateComponent';

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
        <Col>
          <UseLayoutEffectComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
