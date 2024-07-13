import { Container, Row, Col } from 'react-bootstrap';

const Background = () => {
    return (
        <Container fluid className="bg-Container p-5 my-5 rounded">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="display-4 text-white">Hello, people!</h1>
          <p className="lead text-white">This is a simple website, made using react! Write down whatever's on your mind.</p>
          <hr className="my-4 bg-white" />
          <p className="text-white">From the simplest of thoughts to journaling your life, or maybe jotting down the list of grocery items you need to buy? Notes is the perfect go to solution</p>
          <a className="btn btn-primary btn-lg" href="/new" role="button">Make your first note!</a>
        </Col>
      </Row>
    </Container>
    );
}
 
export default Background;