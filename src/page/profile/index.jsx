import Profile from "../../components/profile";
import { Container, Row, Col, Card } from "react-bootstrap";

function ProfilePage() {
    return (
        <Container className="mt-4">
            <Card className="p-4">
                <Row>
                    <Profile />
                </Row>
            </Card>
        </Container>
    );
}

export default ProfilePage;
