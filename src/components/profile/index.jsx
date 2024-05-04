import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProfile } from "../../redux/actions/auth";

import { Col, Form, Image } from "react-bootstrap";

function Profile() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getProfile(null, null, null));
    }, [dispatch]);

    return (
        <>
            {
                <>
                    {user?.image && (
                        <Col md={4}>
                            <Image
                                src={user?.image}
                                className="img-fluid"
                                width={"100%"}
                                rounded
                            />
                        </Col>
                    )}

                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={user?.name}
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={user?.address}
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="phoneNumber"
                            >
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={user?.phoneNumber}
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={user?.email}
                                    disabled
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </>
            }
        </>
    );
}

export default Profile;
