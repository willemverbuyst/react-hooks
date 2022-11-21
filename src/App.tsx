import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UseEffectComponent from './components/useEffectComponent';
import UseStateComponent from './components/UseStateComponent';

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
      </Row>
    </Container>
  );
}

export default App;
