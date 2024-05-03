import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCar } from "../../redux/actions/cars";

import { Button, Form, Row, Col } from "react-bootstrap";

function createCarComponent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [plate, setPlate] = useState("");
    const [image, setImage] = useState("");
    const [type, setType] = useState("");
    const [transmission, setTransmission] = useState("");
    const [year, setYear] = useState("");
    const [capacity, setCapacity] = useState("");
    const [rentPerDay, setRentPerDay] = useState("");
    const [available, setAvailable] = useState("");
    const [availableAt, setAvailableAt] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        dispatch(
            createCar(
                navigate,
                brand,
                model,
                plate,
                image,
                type,
                transmission,
                year,
                capacity,
                rentPerDay,
                available,
                availableAt,
                setIsLoading
            )
        );
    };
    return (
        <Form onSubmit={onSubmit}>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="brand">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Brand"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="model">
                        <Form.Label>Model</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="plate">
                        <Form.Label>Plate Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Plate Number"
                            value={plate}
                            onChange={(e) => setPlate(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="type">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="transmission">
                        <Form.Label>Transmission</Form.Label>
                        <Form.Select
                            aria-label="Select Transmission"
                            value={transmission}
                            onChange={(e) => setTransmission(e.target.value)}
                            required
                        >
                            <option value="">Select Transmission</option>
                            <option value="Manual">Manual</option>
                            <option value="Automatic">Automatic</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="year">
                        <Form.Label>Year</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="capacity">
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Capacity"
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="rentPerDay">
                        <Form.Label>Rent Per Day</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Rent Per Day"
                            value={rentPerDay}
                            onChange={(e) => setRentPerDay(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="available">
                        <Form.Label>Availability</Form.Label>
                        <Form.Select
                            aria-label="Select Availability"
                            value={available}
                            onChange={(e) => setAvailable(e.target.value)}
                            required
                        >
                            <option value="">Select Availability</option>
                            <option value="true">Available</option>
                            <option value="false">Not Available</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="availableAt">
                        <Form.Label>Available At</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Enter Available At"
                            value={availableAt}
                            onChange={(e) => setAvailableAt(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="image" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Button
                variant="primary"
                type="submit"
                className="mt-2 w-100"
                disabled={isLoading}
            >
                {isLoading ? "Processing..." : "Save"}
            </Button>
        </Form>
    );
}

export default createCarComponent;
