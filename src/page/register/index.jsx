import Register from "../../components/register";
import { Container, Row, Col, Card } from "react-bootstrap";

function RegisterPage() {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={6} className="mx-auto">
                    <Card>
                        <Card.Header>Register</Card.Header>
                        <Card.Body>
                            <Register />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterPage;
