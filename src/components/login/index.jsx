import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../redux/actions/auth";

import { Button, Form } from "react-bootstrap";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();

        dispatch(login(navigate, email, password, setIsLoading));
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                disabled={isLoading}
                className="mt-2 w-100"
            >
                {isLoading ? "Processing..." : "Submit"}
            </Button>
        </Form>
    );
}

export default Login;
