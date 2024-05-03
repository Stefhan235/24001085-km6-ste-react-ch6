import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCar } from "../../redux/actions/cars";

import { Col, Form, Image } from "react-bootstrap";

function CarDetail() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { car } = useSelector((state) => state.cars);

    useEffect(() => {
        dispatch(getCar(navigate, id));
    }, [dispatch, id, navigate]);

    return (
        <>
            {
                <>
                    {car?.image && (
                        <Col md={4}>
                            <Image
                                src={car?.image}
                                className="img-fluid "
                                width={"100%"}
                                rounded
                                style={{
                                    aspectRatio: "4 / 3",
                                    objectFit: "cover",
                                }}
                            />
                        </Col>
                    )}

                    <Col md={4}>
                        <Form>
                            <Form.Group className="mb-3" controlId="plate">
                                <Form.Label>Plate Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={car?.plate}
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="brand">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={car?.brand}
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="model">
                                <Form.Label>Model</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={car?.model}
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group controlId="type">
                                <Form.Label>Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={car?.type}
                                    disabled
                                />
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col md={4}>
                        <Form.Group
                            className="my-3 mt-md-0"
                            controlId="transmission"
                        >
                            <Form.Label>Transmission</Form.Label>
                            <Form.Control
                                type="text"
                                value={car?.transmission}
                                disabled
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="year">
                            <Form.Label>Year</Form.Label>
                            <Form.Control
                                type="number"
                                value={car?.year}
                                disabled
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="capacity">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control
                                type="number"
                                value={car?.capacity}
                                disabled
                            />
                        </Form.Group>

                        <Form.Group controlId="rentPerDay">
                            <Form.Label>Rent Per Day</Form.Label>
                            <Form.Control
                                type="number"
                                value={car?.rentPerDay.toLocaleString("id-ID")}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </>
            }
        </>
    );
}

export default CarDetail;
