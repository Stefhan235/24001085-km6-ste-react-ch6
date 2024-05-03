import CarDetail from "../../components/car";
import { Container, Row, Card } from "react-bootstrap";

function CarDetailPage() {
    return (
        <Container className="mt-4">
            <h1 className="mb-4">Car Detail</h1>
            <Card className="p-4">
                <Row>
                    <CarDetail />
                </Row>
            </Card>
        </Container>
    );
}

export default CarDetailPage;
