import Login from "../../components/login";
import { Container, Row, Col, Card } from "react-bootstrap";

function LoginPage() {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={6} className="mx-auto">
                    <Card>
                        <Card.Header>LOGIN</Card.Header>
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
