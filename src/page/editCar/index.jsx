import EditCar from "../../components/editCar";
import { Container, Row, Col, Card } from "react-bootstrap";

function editCarPage() {
    return (
        <Container className="mt-4">
            <h1 className="mb-4">Edit Car</h1>
            <Card>
                <Card.Body>
                    <EditCar />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default editCarPage;
