import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getCars } from "../../redux/actions/cars";

import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";

function Home() {
    const dispatch = useDispatch();
    const { cars } = useSelector((state) => state.cars);

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch]);

    return (
        <Container className="mt-4">
            <h1 className="mb-4">Car List</h1>
            <Row>
                {cars && cars.length > 0 ? (
                    cars.map((car, index) => (
                        <Col md={3} key={index}>
                            <Card className="p-4 mb-4">
                                <Image
                                    src={car.image}
                                    className="img-fluid rounded"
                                    style={{
                                        aspectRatio: "4 / 3",
                                        objectFit: "cover",
                                    }}
                                />
                                <h5 className="mt-3">
                                    {car.brand} {car.model}
                                </h5>
                                <h5>
                                    Rp. {car.rentPerDay.toLocaleString("id-ID")}{" "}
                                    / hari
                                </h5>
                                <p>
                                    <span>
                                        <Image
                                            src="public/icon_users.png"
                                            className="pe-2"
                                        />
                                    </span>
                                    {car.capacity} orang
                                </p>
                                <p>
                                    <span>
                                        <Image
                                            src="public/icon_settings.png"
                                            className="pe-2"
                                        />
                                    </span>
                                    {car.transmission}
                                </p>
                                <p>
                                    <span>
                                        <Image
                                            src="public/icon_calendar.png"
                                            className="pe-2"
                                        />
                                    </span>
                                    Tahun {car.year}
                                </p>
                                <Row>
                                    <Col>
                                        <Button
                                            variant="primary"
                                            as={Link}
                                            to={`/car/${car.id}`}
                                            className="w-100 mb-3"
                                        >
                                            Edit
                                        </Button>{" "}
                                    </Col>
                                    <Col>
                                        <Button
                                            variant="danger"
                                            as={Link}
                                            to={`/car/${car.id}`}
                                            className="w-100 mb-3"
                                        >
                                            Delete
                                        </Button>{" "}
                                    </Col>
                                </Row>
                                <Button
                                    variant="success"
                                    as={Link}
                                    to={`/car/${car.id}`}
                                    className="mb-3"
                                >
                                    Details
                                </Button>{" "}
                            </Card>
                        </Col>
                    ))
                ) : (
                    <h3>No Cars Found</h3>
                )}
            </Row>
        </Container>
    );
}

export default Home;
