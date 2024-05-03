import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProfile, logout } from "../../redux/actions/auth";

import { Nav, Navbar, Container, Button, Image } from "react-bootstrap";

function NavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getProfile(null, null, null));
    }, [dispatch, token]);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container className="py-1">
                <Navbar.Brand as={Link} to="/">
                    <Image
                        src="src/assets/react.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{" "}
                    Car Rent
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        {user ? (
                            <>
                                <Nav.Link
                                    as={Link}
                                    to="/profile"
                                    className="mx-3 text-white"
                                >
                                    {user?.name}
                                </Nav.Link>
                                <Button
                                    variant="outline-danger"
                                    onClick={() => {
                                        dispatch(logout());
                                        navigate("/login");
                                    }}
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    as={Link}
                                    to="/login"
                                    variant="outline-light"
                                    className="mx-3"
                                >
                                    Login
                                </Button>
                                <Button
                                    as={Link}
                                    to="/register"
                                    variant="warning"
                                >
                                    Register
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
