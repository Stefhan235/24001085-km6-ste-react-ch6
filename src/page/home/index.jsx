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
        <Container className="mt-5">
            <Row>
                {cars ? (
                    cars.map((car, index) => (
                        <Col md={3} key={index}>
                            <Card className="p-4">
                                <Image
                                    src={car.image}
                                    className="img-fluid rounded"
                                    style={{
                                        aspectRatio: "4 / 3",
                                        objectFit: "cover",
                                    }}
                                />
                                <h6 className="pt-3">
                                    {car.brand} {car.model}
                                </h6>
                                <h5>Rp. {car.rentPerDay} / hari</h5>
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
                                <Button
                                    variant="primary"
                                    as={Link}
                                    to={`/car/${car.id}`}
                                    className="my-3"
                                >
                                    Details
                                </Button>{" "}
                                <Button variant="success">Book</Button>{" "}
                            </Card>
                        </Col>
                    ))
                ) : (
                    <h2>No cars found</h2>
                )}
            </Row>
        </Container>
    );
}

export default Home;
