import CreateCar from "../../components/createCar";
import { Container, Row, Col, Card } from "react-bootstrap";

function createCarPage() {
    return (
        <Container className="mt-4">
            <h1 className="mb-4">Add Car</h1>
            <Card>
                <Card.Body>
                    <CreateCar />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default createCarPage;
