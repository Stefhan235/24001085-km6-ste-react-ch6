import Login from "../../components/login";
import { Container, Row, Col, Card } from "react-bootstrap";

function LoginPage() {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={4} className="mx-auto">
                    <Card>
                        <Card.Header>Login</Card.Header>
                        <Card.Body>
                            <Login />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;
